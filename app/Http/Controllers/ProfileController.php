<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
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
        
        $user->isTeacher = $user->isTeacher();
        $user->isStudent = $user->isStudent();
        $user->isAdmin = $user->isAdmin();

        return Inertia::render('Profile/Index', [
            'user' => $user
        ]);
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $auth = auth()->user();
        $auth->isTeacher = $auth->isTeacher();
        $auth->isStudent = $auth->isStudent();
        $auth->isAdmin = $auth->isAdmin();

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'auth' => $auth,
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
    
        Alert::success('Success Title', 'Success Message');
        $user->save();

        return Redirect::route('profile.edit');
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
