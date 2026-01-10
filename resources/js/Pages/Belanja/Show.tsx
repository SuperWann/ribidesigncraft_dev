// Pages/Belanja/Show.tsx

import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import UserLayout from '@/Layouts/UserLayout';
import ProductCard from '@/Components/belanja/ProductCard';
import { Star, ShoppingCart, Heart, Minus, Plus, ArrowLeft } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from '@/Components/ui/breadcrumb';

interface ProductImage {
    product_image_id: number;
    image: string;
    is_primary: boolean;
}

interface Product {
    product_id: number;
    name: string;
    description: string;
    featured: boolean;
    price: number;
    formatted_price: string;
    stock: number;
    is_available: boolean;
    is_custom_order: boolean;
    category: {
        product_category_id: number;
        name: string;
    } | null;
    images: ProductImage[];
    created_at: string;
    updated_at: string;
}

interface RelatedProduct {
    product_id: number;
    name: string;
    price: number;
    formatted_price: string;
    main_image: string | null;
    description: string | null;
    featured: boolean;
    category: {
        product_category_id: number;
        name: string;
    } | null;
}

interface Props {
    product: Product;
    relatedProducts: RelatedProduct[];
}

export default function Show({ product, relatedProducts }: Props) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]?.image || null);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (type: 'increase' | 'decrease') => {
        if (type === 'increase' && quantity < product.stock) {
            setQuantity(quantity + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        console.log('Add to cart:', { product_id: product.product_id, quantity });
        // Implement add to cart logic
    };

    const handleBuyNow = () => {
        console.log('Buy now:', { product_id: product.product_id, quantity });
        // Implement buy now logic
    };

    const rating = 5.0;
    const reviewsCount = 123;

    return (
        <>
            <Head title={`${product.name}`} />
            <UserLayout>
                <div className="min-h-screen bg-white py-12 mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <div className="mb-6">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/belanja">
                                            Halaman Belanja
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            {product.name.length > 30
                                                ? product.name.substring(0, 30) + '...'
                                                : product.name}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        {/* Product Detail */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            {/* Images Section */}
                            <div className="space-y-4">
                                {/* Main Image */}
                                <div className="bg-gray-50 rounded-2xl aspect-square flex items-center justify-center border border-gray-100">
                                    {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            alt={product.name}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    ) : (
                                        <div className="text-gray-400">No Image</div>
                                    )}
                                </div>

                                {/* Thumbnail Images */}
                                {product.images.length > 1 && (
                                    <div className="grid grid-cols-4 gap-4">
                                        {product.images.map((image) => (
                                            <button
                                                key={image.product_image_id}
                                                onClick={() => setSelectedImage(image.image)}
                                                className={`bg-gray-50 rounded-lg p-1 aspect-square flex items-center justify-center border-2 transition-all cursor-pointer ${selectedImage === image.image
                                                    ? 'border-gray-900'
                                                    : 'border-gray-100 hover:border-gray-300'
                                                    }`}
                                            >
                                                <img
                                                    src={image.image}
                                                    alt={`${product.name} thumbnail`}
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div>
                                <div className="flex flex-row gap-2">
                                    {/* Category Badge */}
                                    {product.category && (
                                        <div className="mb-4">
                                            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                                                {product.category.name}
                                            </span>
                                        </div>
                                    )}

                                    {/* Featured Badge */}
                                    {product.featured && (
                                        <div className="mb-4">
                                            <span className="inline-block bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold">
                                                Best Seller
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Product Name */}
                                <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    {product.name}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center">
                                        <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                                        <span className="ml-2 text-lg font-semibold text-gray-900">
                                            {rating.toFixed(1)}
                                        </span>
                                    </div>
                                    <span className="text-gray-500">
                                        ({reviewsCount} Reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        {product.formatted_price}
                                    </span>
                                </div>

                                {/* Stock */}
                                <div className="mb-6">
                                    <p className="text-gray-600">
                                        <span className="font-semibold text-gray-900">Stock: </span> {product.stock} tersedia
                                    </p>
                                </div>

                                {/* Description */}
                                {product.description && (
                                    <div className="mb-6">
                                        <p className="text-gray-600 text-justify">
                                            <span className="font-semibold text-gray-900">Deskripsi: </span> {product.description}
                                        </p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-4 mb-6">
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-1 bg-white border-2 border-gray-900 text-gray-900 py-4 px-6 rounded-xl font-semibold text-base hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <Heart className="w-5 h-5 fill-white" />
                                        Tambah Wishlist
                                    </button>
                                    <button
                                        onClick={handleBuyNow}
                                        className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold text-base hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer"
                                    >
                                        Beli Sekarang
                                    </button>
                                </div>

                                {/* Additional Info */}
                                {product.is_custom_order && (
                                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                        <p className="text-sm text-blue-800 font-medium">
                                            ✨ Produk ini bisa di-custom sesuai keinginan Anda!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Related Products */}
                        {relatedProducts.length > 0 && (
                            <div>
                                {/* Divider */}
                                <div className="border-t border-gray-200 my-12"></div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Produk Terkait
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {relatedProducts.map((relatedProduct) => (
                                        <ProductCard
                                            key={relatedProduct.product_id}
                                            product={relatedProduct}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </UserLayout>
        </>
    );
}