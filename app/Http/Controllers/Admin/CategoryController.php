<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryStoreRequest;
use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $courses = CoursesCategory::paginate(10);
        $coursesCount = CoursesCategory::all()->count();

        return Inertia('AdminPanel/Categories/Index', [
            'user' => $user,
            'coursesCount' => $coursesCount,
            'courses' => $courses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $auth = auth()->user();

        return Inertia('AdminPanel/Categories/Create', [
            'auth' => $auth,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryStoreRequest $request)
    {
        $data = $request->validated();
        if($request->hasFile('image_path')){
            $data['image_path'] = $request->file('image_path')->store('category_image');
        }

        CoursesCategory::create($data);

        return Redirect::route('adminpanel.categories')->with('success_message', 'Dodano nową kategorię!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
