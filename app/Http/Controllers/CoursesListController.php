<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursesListController extends Controller
{
    public function index(CoursesCategory $category){

        $auth = Auth()->user();
        
        return Inertia::render('CoursesList/Index', [
            'category' => $category,
            'auth' => new UserResource($auth),
        ]);
    }
}
