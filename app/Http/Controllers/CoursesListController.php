<?php

namespace App\Http\Controllers;

use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursesListController extends Controller
{
    public function index(CoursesCategory $category){
        $user = Auth()->user();
        $user->isTeacher = $user->isTeacher();
        $user->isStudent = $user->isStudent();
        $user->isAdmin = $user->isAdmin();
        return Inertia::render('CoursesList/Index', [
            'category' => $category,
            'user' => $user
        ]);
    }
}
