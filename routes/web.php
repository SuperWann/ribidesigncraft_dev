<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('beranda');

Route::get('/belanja', [ProductController::class, 'index'])->name('belanja');
Route::get('/belanja/{product}', [ProductController::class, 'show'])->name('belanja.show');

Route::get('/gallery', function () {
    return Inertia::render('Gallery/Index');
})->name('gallery');

Route::get('/about', function () {
    return Inertia::render('About/Index');
})->name('about');

Route::get('/wishlist', function () {
    return Inertia::render('Wishlist/Index');
})->name('wishlist');
