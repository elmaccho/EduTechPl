<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use App\UserRole;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Throwable;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auth = auth()->user();

        $users = User::paginate(10);
        $roles = UserRole::cases();

        $count = User::count();
        $weekly = User::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $monthly = User::whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()])->count();
        $yearly = User::whereBetween('created_at', [Carbon::now()->startOfYear(), Carbon::now()->endOfYear()])->count();

        return Inertia('AdminPanel/Users/Index', [
            'users' => $users,
            'user' => $auth,
            'count' => $count,
            'roles' => $roles,
            'weekly' => $weekly,
            'monthly' => $monthly,
            'yearly' => $yearly,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $auth = auth()->user();
        $roles = UserRole::cases();

        return Inertia('AdminPanel/Users/Edit', [
            'user' => $user,
            'auth' => $auth,
            'roles' => $roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user): RedirectResponse
    {
        $data = $request->validated();

        if ($request->hasFile('profile_image_path')) {
            if ($user->profile_image_path) {
                Storage::delete($user->profile_image_path);
            }

            $data['profile_image_path'] = $request->file('profile_image_path')->store('users_profile_images');
        } else {
            unset($data['profile_image_path']);
        }

        $user->fill($data);
        $user->save();

        return Redirect::route('adminpanel.users')->with('success_message', 'Zaktualizowano dane!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $name = $user->name ." ". $user->surname;
        try {
            if($user->id === auth()->id()){
                return Redirect::route('adminpanel.users')->with('error_message', 'Nie usuwaj sam siebie!');
            }
            $user->delete();
            return Redirect::route('adminpanel.users')->with('success_message', 'Użytkownik '. $name .' został usunięty!');
        } catch (Throwable $e) {
            return Redirect::route('adminpanel.users')->with('error_message', $e);
        }
    }
}
