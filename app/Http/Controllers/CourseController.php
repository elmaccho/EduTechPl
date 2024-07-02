<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseStoreRequest;
use App\Http\Resources\UserResource;
use App\Models\Course;
use App\Models\CoursesCategory;
use Faker\Provider\ar_EG\Internet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $auth = auth()->user();
        $categories = CoursesCategory::all();

        return Inertia('Course/Create', [
            'auth' => $auth ? new UserResource($auth) : null,
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseStoreRequest $request)
    {
        $data = $request->validated();

        if($request->hasFile('image_path')){
            $data['image_path'] = $request->file('image_path')->store('course_image');
        }

        $course = Course::create($data);

        return Redirect::route('course.show', $course->id)->with('success_message');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        $auth = auth()->user();

        return Inertia('Course/Show', [
            'auth' => $auth ? new UserResource($auth) : null,
            'course' => $course,
        ]);
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
