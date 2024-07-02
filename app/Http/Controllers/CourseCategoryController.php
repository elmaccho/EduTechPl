<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseCategoryController extends Controller
{
    public function index(){
        $categories = CoursesCategory::all();

        $auth = Auth()->user();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
            'auth' => $auth ? new UserResource($auth) : null,
        ]);
    }
}
