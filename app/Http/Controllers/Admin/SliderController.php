<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SliderCreateRequest;
use App\Http\Requests\SliderUpdateRequest;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Throwable;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auth = auth()->user();
        $sliders = Slider::paginate(10);
        $slidersCount = Slider::all()->count();

        return Inertia('AdminPanel/Slider/Index', [
            'auth' => $auth,
            'sliders' => $sliders,
            'slidersCount' => $slidersCount,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $auth = auth()->user();

        return Inertia('AdminPanel/Slider/Create', [
            'auth' => $auth,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SliderCreateRequest $request)
    {
        $data = $request->validated();

        $data = $request->validated();
        if($request->hasFile('image_path')){
            $data['image_path'] = $request->file('image_path')->store('slider_image');
        }

        Slider::create($data);

        return Redirect::route('adminpanel.slider')->with('success_message', 'Dodano nowy Slider!');
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
    public function edit(Slider $slider)
    {
        $auth = auth()->user();

        return Inertia('AdminPanel/Slider/Edit', [
            'auth' => $auth,
            'slider' => $slider,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SliderUpdateRequest $request, Slider $slider)
    {
        $data = $request->validated();

        if($request->hasFile('image_path')){
            if($slider->image_path){
                Storage::delete($slider->image_path);
            }

            $data['image_path'] = $request->file('image_path')->store('slider_image');
        } else {
            unset($data['image_path']);
        }

        $slider->fill($data);
        $slider->save();

        return Redirect::route('adminpanel.slider')->with('success_message', 'Zaktualizowano dane!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slider $slider)
    {
        try {
            if($slider->image_path){
                Storage::delete($slider->image_path);
            }

            $slider->delete();

            return Redirect::route('adminpanel.slider')->with('success_message', 'Slider został usunięty!');
        } catch (Throwable $e) {
            return Redirect::route('adminpanel.slider')->with('error_message', $e);
        }
    }
}
