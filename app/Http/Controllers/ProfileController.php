<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use RealRashid\SweetAlert\Facades\Alert;

class ProfileController extends Controller
{
    public function index(User $user){
        $auth = auth()->user();

        return Inertia::render('Profile/Index', [
            'user' => new UserResource($user),
            'auth' => new UserResource($auth),
        ]);
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $auth = auth()->user();

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'auth' => new UserResource($auth),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
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
    
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }
    
        $user->save();

        return Redirect::route('profile.edit')->with('success_message', 'Zaktualizowano dane!');
    }
    
    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
