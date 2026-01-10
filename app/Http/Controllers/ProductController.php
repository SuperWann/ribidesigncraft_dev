<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Fetch products with relationships
        $products = Product::with(['category', 'images'])
            ->available()
            ->inStock()
            ->get()
            ->map(function ($product) {
                return [
                    'product_id' => $product->product_id,
                    'name' => $product->name,
                    'description' => $product->description,
                    'price' => $product->price,
                    'formatted_price' => $product->formatted_price,
                    'stock' => $product->stock,
                    'is_available' => $product->is_available,
                    'is_custom_order' => $product->is_custom_order,
                    'featured' => $product->featured,
                    'main_image' => $product->main_image
                        ? 'storage/' . $product->main_image
                        : null,
                    'created_at' => $product->created_at,
                    'category' => $product->category ? [
                        'product_category_id' => $product->category->product_category_id,
                        'name' => $product->category->name
                    ] : null,
                ];
            });

        // Fetch all categories
        $categories = ProductCategory::select('product_category_id', 'name')
            ->get();

        // dd($products);

        return Inertia::render('Belanja/Index', [
            'products' => $products,
            'categories' => $categories
        ]);
    }

    public function show(Product $product)
    {
        $product->load(['category', 'images']);

        $productData = [
            'product_id' => $product->product_id,
            'name' => $product->name,
            'description' => $product->description,
            'price' => $product->price,
            'formatted_price' => $product->formatted_price,
            'stock' => $product->stock,
            'is_available' => $product->is_available,
            'is_custom_order' => $product->is_custom_order,
            'featured' => $product->featured,
            'created_at' => $product->created_at,
            'updated_at' => $product->updated_at,
            'category' => $product->category ? [
                'product_category_id' => $product->category->product_category_id,
                'name' => $product->category->name
            ] : null,
            'images' => $product->images->map(function ($image) {
                return [
                    'product_image_id' => $image->product_image_id,
                    'image' => asset('storage/' . $image->image),
                    'is_primary' => $image->is_primary ?? false
                ];
            })
        ];

        // Get related products (same category)
        $relatedProducts = Product::with(['category', 'images'])
            ->where('product_category_id', $product->product_category_id)
            ->where('product_id', '!=', $product->product_id)
            ->available()
            ->inStock()
            ->limit(4)
            ->get()
            ->map(function ($prod) {
                return [
                    'product_id' => $prod->product_id,
                    'name' => $prod->name,
                    'price' => $prod->price,
                    'formatted_price' => $prod->formatted_price,
                    'main_image' => $prod->main_image 
                        ? asset('storage/' . $prod->main_image) 
                        : null,
                    'category' => $prod->category ? [
                        'product_category_id' => $prod->category->product_category_id,
                        'name' => $prod->category->name
                    ] : null,
                ];
            });

        return Inertia::render('Belanja/Show', [
            'product' => $productData,
            'relatedProducts' => $relatedProducts
        ]);
    }
}
