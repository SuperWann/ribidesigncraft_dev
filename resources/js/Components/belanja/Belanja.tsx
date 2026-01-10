import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import SidebarFilter from './SidebarFilter';
import SearchBar from './SearchBar';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from '@/Components/ui/pagination';

interface Product {
    product_id: number;
    name: string;
    price: number;
    formatted_price: string;
    main_image: string | null;
    description: string | null;
    category: {
        product_category_id: number;
        name: string;
    } | null;
    featured: boolean;
    created_at?: string;
}

interface Category {
    product_category_id: number;
    name: string;
}

interface BelanjaProps {
    products: Product[];
    categories: Category[];
}

export default function Belanja({ products = [], categories = [] }: BelanjaProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [sortBy, setSortBy] = useState('newest');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by search query
        if (searchQuery) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== null) {
            result = result.filter(product =>
                product.category?.product_category_id === selectedCategory
            );
        }

        // Sort products
        switch (sortBy) {
            case 'newest':
                result.sort((a, b) => {
                    const dateA = new Date(a.created_at || 0).getTime();
                    const dateB = new Date(b.created_at || 0).getTime();
                    return dateB - dateA;
                });
                break;
            case 'best_seller':
                result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
            case 'discount':
                // Sort by discount if available
                break;
            default:
                break;
        }

        return result;
    }, [products, searchQuery, selectedCategory, sortBy]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    // Reset to page 1 when filters change
    useMemo(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, sortBy]);

    // Generate page numbers
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    const handleAddToCart = (productId: number) => {
        console.log('Add to cart:', productId);
        // Implement add to cart logic
    };

    const handleBuyNow = (productId: number) => {
        console.log('Buy now:', productId);
        // Implement buy now logic
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        // scrollToTop();
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-96 md:h-160 overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shop Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <div className="text-center text-white max-w-4xl">
                        <p className="text-lg md:text-xl text-white/90 mb-8">
                            Hai Pengguna, apa yang Anda cari hari ini?
                        </p>

                        {/* Search Bar */}
                        <div className="flex justify-center mt-6">
                            <SearchBar
                                onSearch={setSearchQuery}
                                placeholder="Cari produk di sini"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filter */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <SidebarFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            sortBy={sortBy}
                            onSortChange={setSortBy}
                        />
                    </aside>

                    {/* Products Grid */}
                    <main className="flex-1">
                        {/* Results Count */}
                        <div className="mb-8">
                            <p className="text-gray-600 text-sm">
                                Menampilkan <span className="font-semibold text-gray-900">{startIndex + 1}</span>-
                                <span className="font-semibold text-gray-900">{Math.min(endIndex, filteredProducts.length)}</span> dari{' '}
                                <span className="font-semibold text-gray-900">{filteredProducts.length}</span> produk
                                {selectedCategory && (
                                    <span> dalam <span className="font-semibold text-gray-900">
                                        {categories.find(c => c.product_category_id === selectedCategory)?.name}
                                    </span></span>
                                )}
                            </p>
                        </div>

                        {/* Products Grid */}
                        {currentProducts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                                    {currentProducts.map((product) => (
                                        <ProductCard
                                            key={product.product_id}
                                            product={product}
                                            onAddToCart={handleAddToCart}
                                            onBuyNow={handleBuyNow}
                                        />
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="mt-12 mb-8">
                                        <Pagination>
                                            <PaginationContent>
                                                {/* Previous Button */}
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (currentPage > 1) {
                                                                handlePageClick(currentPage - 1);
                                                            }
                                                        }}
                                                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                                                    />
                                                </PaginationItem>

                                                {/* Page Numbers */}
                                                {getPageNumbers().map((page, index) => (
                                                    <PaginationItem key={index}>
                                                        {page === '...' ? (
                                                            <PaginationEllipsis />
                                                        ) : (
                                                            <PaginationLink
                                                                href="#"
                                                                isActive={currentPage === page}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handlePageClick(page as number);
                                                                }}
                                                            >
                                                                {page}
                                                            </PaginationLink>
                                                        )}
                                                    </PaginationItem>
                                                ))}

                                                {/* Next Button */}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (currentPage < totalPages) {
                                                                handlePageClick(currentPage + 1);
                                                            }
                                                        }}
                                                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                                                    />
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>

                                        {/* Page Info */}
                                        <p className="text-center mt-4 text-sm text-gray-500">
                                            Page {currentPage} of {totalPages}
                                        </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <div className="text-gray-300 mb-6">
                                    <svg className="w-32 h-32 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    No products found
                                </h3>
                                <p className="text-gray-500 mb-6">
                                    Try adjusting your search or filter to find what you're looking for
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory(null);
                                        setCurrentPage(1);
                                    }}
                                    className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}