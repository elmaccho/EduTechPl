<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $auth = auth()->user();

        if($auth){
            $auth->isTeacher = $auth->isTeacher();
            $auth->isStudent = $auth->isStudent();
            $auth->isAdmin = $auth->isAdmin();
        }
        return Inertia::render('Homepage', [
            'appName' => config('app.name', 'Laravel'),
            'auth' => $auth,
        ]);

    }
}
