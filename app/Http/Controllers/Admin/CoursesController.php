<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseStoreRequest;
use App\Http\Resources\CoursesResource;
use App\Models\Course;
use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        $courses = Course::paginate(10);
        $coursesCount = Course::all()->count();

        

        return Inertia('AdminPanel/Courses/Index', [
            'user' => $user,
            'courses' => CoursesResource::collection($courses),
            'coursesCount' => $coursesCount,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $auth = auth()->user();
        $categories = CoursesCategory::all();
        
        return Inertia('AdminPanel/Courses/Create', [
            'auth' => $auth,
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

        Course::create($data);

        return Redirect::route('adminpanel.courses')->with('success_message', 'Dodano nowy Kurs!');
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
