<?php

namespace App\Http\Controllers;

use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseCategoryController extends Controller
{
    public function index(){
        $categories = CoursesCategory::all();

        $auth = Auth()->user();
        $auth->isTeacher = $auth->isTeacher();
        $auth->isStudent = $auth->isStudent();
        $auth->isAdmin = $auth->isAdmin();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
            'auth' => $auth,
        ]);
    }
}
