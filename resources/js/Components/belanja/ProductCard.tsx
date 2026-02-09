import { router } from '@inertiajs/react';
import { Star, Heart, ImageOff } from 'lucide-react';

interface Product {
    product_id: number;
    name: string;
    price: number;
    formatted_price: string;
    main_image: string | null;
    description: string | null;
    featured: boolean;
    category: {
        name: string;
    } | null;
    rating?: number;
    reviews_count?: number;
}

interface ProductCardProps {
    product: Product;
    onAddToCart?: (productId: number) => void;
    onBuyNow?: (productId: number) => void;
}

export default function ProductCard({ product, onAddToCart, onBuyNow }: ProductCardProps) {
    const rating = product.rating || 5.0;
    const reviewsCount = product.reviews_count || 123;

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group flex flex-col cursor-pointer"  onClick={() => router.visit(`/belanja/${product.product_id}`)}>
            {/* Product Image */}
            <div className="relative bg-gray-50 h-56 md:h-64 lg:h-72 w-full overflow-hidden">
                {product.category && (
                    <span className="absolute top-4 left-4 z-20 bg-white px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-sm border border-gray-200">
                        {product.category.name}
                    </span>
                )}

                {/* Featured Badge */}
                {product.featured && (
                    <div className="absolute top-4 right-4 z-20 group/badge">
                        {/* Tooltip */}
                        <span className="bg-yellow-400 px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm border border-yellow-500 flex items-center transition-all duration-200 group-hover/badge:px-4">
                            <Star className="w-4 h-4 fill-yellow-600 text-yellow-600 group-hover/badge:hidden" />
                            <span className="hidden text-xs font-semibold group-hover/badge:inline">Best Seller</span>
                        </span>
                    </div>
                )}


                {product.main_image ? (
                    <img
                        src={product.main_image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <ImageOff className="text-gray-400 text-sm font-medium w-12 h-12" />
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-1">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                    <span className="text-sm font-semibold text-gray-900">
                        {rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-gray-500">
                        ({reviewsCount} Reviews)
                    </span>
                </div>
                {/* Product Name */}
                <h3 className="font-bold text-gray-900 line-clamp-2 min-h-8 text-lg leading-snug">
                    {product.name}
                </h3>

                {/* Product Description */}
                {product.description ? (
                    <p className="text-gray-600 line-clamp-2">
                        {product.description}
                    </p>
                ) : (
                    <p className="text-gray-600 line-clamp-2">
                        Belum ada deskripsi untuk produk ini
                    </p>
                )}


                {/* Price */}
                <div className="mb-4 mt-4">
                    <span className="text-2xl font-bold text-gray-900">
                        {`${product.formatted_price},00` || `Rp${product.price.toLocaleString('id-ID')},00`}
                    </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                    <button
                        onClick={() => onAddToCart?.(product.product_id)}
                        className="flex-1 bg-white border-2 border-gray-900 text-gray-900 py-3 px-4 rounded-xl hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer"
                    >
                        <Heart className="w-5 h-5 cursor-pointer fill-white" />
                    </button>
                    <button
                        onClick={() => router.visit(`/belanja/${product.product_id}`)}
                        className="flex-5 bg-gray-900 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer"
                    >
                        Lihat Detail
                    </button>
                </div>
            </div>
        </div>
    );
}