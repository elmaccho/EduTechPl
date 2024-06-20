<?php

namespace App\Http\Controllers;

use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursesListController extends Controller
{
    public function index(CoursesCategory $category){

        $auth = Auth()->user();
        $auth->isTeacher = $auth->isTeacher();
        $auth->isStudent = $auth->isStudent();
        $auth->isAdmin = $auth->isAdmin();
        
        return Inertia::render('CoursesList/Index', [
            'category' => $category,
            'auth' => $auth
        ]);
    }
}
