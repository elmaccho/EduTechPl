<?php

use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseCategoryController;
use App\Http\Controllers\CoursesListController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NotesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserController;
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

Route::get('/', [HomeController::class, 'index'])->name('homepage');

Route::middleware('auth')->group(function () {
    Route::get('/profil/ustawienia', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::middleware('admin')->prefix('panel')->group(function () {
        Route::get('/', [AdminPanelController::class, 'index'])->name('adminpanel.index');
        Route::get('/uzytkownicy', [UserController::class, 'index'])->name('adminpanel.users');
        Route::get('/kursy', [CategoryController::class, 'index'])->name('adminpanel.courses');
        Route::get('/kategorie', [CategoryController::class, 'index'])->name('adminpanel.categories');
        Route::get('/notatki', [NotesController::class, 'index'])->name('adminpanel.notes');
        Route::get('/slider', [SliderController::class, 'index'])->name('adminpanel.slider');
    });
});


Route::get('/profil/{user}', [ProfileController::class, 'index'])->name('profile.index');
Route::get('/kategorie', [CourseCategoryController::class, 'index'])->name('coursecategory.index');
Route::get('/kategoria/{category:name}', [CoursesListController::class, 'index'])->name('courseslist.index');

require __DIR__ . '/auth.php';
