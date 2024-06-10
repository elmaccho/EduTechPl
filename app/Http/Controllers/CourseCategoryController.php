<?php

namespace App\Http\Controllers;

use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseCategoryController extends Controller
{
    public function index(){
        $categories = CoursesCategory::all();

        return Inertia::render('Categories/Index', [
            'categories' => $categories
        ]);
    }
}
