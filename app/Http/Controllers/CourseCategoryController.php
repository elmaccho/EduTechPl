<?php

namespace App\Http\Controllers;

use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseCategoryController extends Controller
{
    public function index(){
        $categories = CoursesCategory::all();
        $user = Auth()->user();
        $user->isTeacher = $user->isTeacher();
        $user->isStudent = $user->isStudent();
        $user->isAdmin = $user->isAdmin();
        return Inertia::render('Categories/Index', [
            'categories' => $categories,
            'user' => $user

        ]);
    }
}
