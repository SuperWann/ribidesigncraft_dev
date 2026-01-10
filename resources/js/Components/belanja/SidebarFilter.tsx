import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Category {
    product_category_id: number;
    name: string;
    icon?: string;
}

interface SidebarFilterProps {
    categories: Category[];
    selectedCategory: number | null;
    onCategoryChange: (categoryId: number | null) => void;
    sortBy: string;
    onSortChange: (sortBy: string) => void;
}

export default function SidebarFilter({
    categories,
    selectedCategory,
    onCategoryChange,
    sortBy,
    onSortChange
}: SidebarFilterProps) {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isSortOpen, setIsSortOpen] = useState(true);

    const sortOptions = [
        { value: 'newest', label: 'Terbaru' },
        { value: 'best_seller', label: 'Best Seller' },
    ];

    return (
        <div className="w-full bg-white rounded-xl border border-gray-200 p-6">
            <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center justify-between mb-4 group"
            >
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Kategori
                </h3>
                <div className="text-gray-500 group-hover:text-gray-900 transition-colors">
                    {isCategoryOpen ? (
                        <ChevronDown className="w-5 h-5" />
                    ) : (
                        <ChevronRight className="w-5 h-5" />
                    )}
                </div>
            </button>

            {isCategoryOpen && (
                <>
                    {/* All Products Button */}
                    <label
                        className={`flex items-center justify-between p-4 mb-3 rounded-xl cursor-pointer transition-all ${selectedCategory === null
                            ? 'bg-gray-900 text-white shadow-lg'
                            : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={selectedCategory === null}
                                onChange={() => onCategoryChange(null)}
                                className="w-5 h-5 rounded accent-gray-900 cursor-pointer"
                            />
                            <span className={`text-sm ${selectedCategory === null
                                ? 'font-semibold text-white'
                                : 'text-gray-700'
                                }`}>Semua Produk</span>
                        </div>
                    </label>

                    {/* Categories List */}
                    <div className="space-y-2 mb-8">
                        {categories.map((category) => (
                            <label
                                key={category.product_category_id}
                                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${selectedCategory === category.product_category_id
                                    ? 'bg-gray-100 border-2 border-gray-900'
                                    : 'bg-white hover:bg-gray-50 border-2 border-transparent'
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedCategory === category.product_category_id}
                                    onChange={() => onCategoryChange(category.product_category_id)}
                                    className="w-5 h-5 rounded accent-gray-900 cursor-pointer"
                                />
                                <span className={`text-sm ${selectedCategory === category.product_category_id
                                    ? 'font-semibold text-gray-900'
                                    : 'text-gray-700'
                                    }`}>
                                    {category.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </>
            )}

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Sort By Section */}
            <div>
                <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="w-full flex items-center justify-between group"
                >
                    <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Urut Berdasarkan
                    </h3>
                    <div className="text-gray-500 group-hover:text-gray-900 transition-colors">
                        {isSortOpen ? (
                            <ChevronDown className="w-5 h-5" />
                        ) : (
                            <ChevronRight className="w-5 h-5" />
                        )}
                    </div>
                </button>

                {isSortOpen && (
                    <div className="space-y-2 mt-4">
                        {sortOptions.map((option) => (
                            <label
                                key={option.value}
                                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${sortBy === option.value
                                    ? 'bg-blue-50 border-2 border-blue-600'
                                    : 'bg-white hover:bg-gray-50 border-2 border-transparent'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="sortBy"
                                    checked={sortBy === option.value}
                                    onChange={() => onSortChange(option.value)}
                                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                                />
                                <span className={`text-sm ${sortBy === option.value
                                    ? 'font-semibold text-blue-600'
                                    : 'text-gray-700'
                                    }`}>
                                    {option.label}
                                </span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}