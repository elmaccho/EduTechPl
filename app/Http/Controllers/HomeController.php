<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $auth = auth()->user();

        $sliders = Slider::where('displayed', true)->get();

        return Inertia::render('Homepage', [
            'appName' => config('app.name', 'Laravel'),
            'auth' => $auth ? new UserResource($auth) : null,
            'sliders' => $sliders,
        ]);

    }
}
