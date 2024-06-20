<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Models\CoursesCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Throwable;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $categories = CoursesCategory::paginate(10);
        $categoriesCount = CoursesCategory::all()->count();

        return Inertia('AdminPanel/Categories/Index', [
            'user' => $user,
            'categoriesCount' => $categoriesCount,
            'categories' => $categories,
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
    public function edit(CoursesCategory $category)
    {
        $auth = auth()->user();

        return Inertia('AdminPanel/Categories/Edit', [
            'category' => $category,
            'auth' => $auth,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryUpdateRequest $request, CoursesCategory $category)
    {
        $data = $request->validated();

        if ($request->hasFile('image_path')) {
            if ($category->image_path) {
                Storage::delete($category->image_path);
            }

            $data['image_path'] = $request->file('image_path')->store('category_image');
        } else {
            unset($data['image_path']);
        }

        $category->fill($data);
        $category->save();

        return Redirect::route('adminpanel.categories')->with('success_message', 'Zaktualizowano dane!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CoursesCategory $category)
    {
        try {
            $category->delete();
            return Redirect::route('adminpanel.categories')->with('success_message', 'Kategoria '. $category->name .' została usunięta!');
        } catch (Throwable $e) {
            return Redirect::route('adminpanel.categories')->with('error_message', $e);
        }
    }
}
