<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Testimonial;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $featuredProducts = Product::with(['category', 'images'])
            ->where('featured', true)
            ->where('is_available', true)
            ->take(4)
            ->get();

        // Ambil 3 testimoni terbaru
        $testimonials = Testimonial::with('user')
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('Beranda/Index', [
            'featuredProducts' => $featuredProducts,
            'testimonials' => $testimonials,
        ]);
    }
}