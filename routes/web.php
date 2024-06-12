<?php

use App\Http\Controllers\CourseCategoryController;
use App\Http\Controllers\CoursesListController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function(){
    return Inertia::render('Homepage', [
        'appName' => config('app.name', 'Laravel')
    ]);
})->name('homepage');

Route::middleware('auth')->group(function () {
    Route::get('/profil/ustawienia', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/profil/{user}', [ProfileController::class, 'index'])->name('profile.index');
Route::get('/kategorie', [CourseCategoryController::class, 'index'])->name('coursecategory.index');
Route::get('/kategoria/{category:name}', [CoursesListController::class, 'index'])->name('courseslist.index');

require __DIR__.'/auth.php';
