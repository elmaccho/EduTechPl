<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $user = auth()->user();

        if($user){
            $user->isTeacher = $user->isTeacher();
            $user->isStudent = $user->isStudent();
            $user->isAdmin = $user->isAdmin();
        }
        return Inertia::render('Homepage', [
            'appName' => config('app.name', 'Laravel'),
            'user' => $user,
        ]);

    }
}
