<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return Inertia::render('Beranda/Index');
})->name('beranda');

Route::get('/belanja', [ProductController::class, 'index'])->name('belanja');
Route::get('/belanja/{product}', [ProductController::class, 'show'])->name('belanja.show');

Route::get('/testimoni', function () {
    return Inertia::render('Testimoni/Index');
})->name('testimoni');

Route::get('/wishlist', function () {
    return Inertia::render('Wishlist/Index');
})->name('wishlist');
