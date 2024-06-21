<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $auth = auth()->user();

        if($auth){
            $auth->isTeacher = $auth->isTeacher();
            $auth->isStudent = $auth->isStudent();
            $auth->isAdmin = $auth->isAdmin();
        }

        $sliders = Slider::where('displayed', true)->get();

        return Inertia::render('Homepage', [
            'appName' => config('app.name', 'Laravel'),
            'auth' => $auth,
            'sliders' => $sliders,
        ]);

    }
}
