<?php

namespace App\Http\Controllers;

use App\Models\CoursesCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminPanelController extends Controller
{
    public function index(){
        $user = Auth::user();

        $users = User::all();
        $categories = CoursesCategory::all();

        return Inertia::render('AdminPanel/Index', [
            'appName' => config('app.name', 'Laravel'),
            'user' => $user, 
            'users' => $users,   
            'categories' => $categories
        ]);
    }
}
