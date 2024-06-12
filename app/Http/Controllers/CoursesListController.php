<?php

namespace App\Http\Controllers;

use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursesListController extends Controller
{
    public function index(CoursesCategory $category){
        return Inertia::render('CoursesList/Index', [
            'category' => $category,
        ]);
    }
}
