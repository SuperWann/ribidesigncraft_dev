import { useState } from "react";
import { Heart, User, Menu, X, ShoppingCart } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { NavigationLinks } from "./Navlink";
import { href } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Beranda");

    const { url, props } = usePage();

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="shrink-0">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Ribi Shop
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavigationLinks url={url} />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                            aria-label="Wishlist"
                            onClick={() => window.location.href = '/wishlist'}
                            >
                            <Heart className="w-5 h-5 hover:fill-red-500 hover:stroke-red-500" />
                        </button>
                        <button
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                            aria-label="Account"
                        >
                            <User className="w-5 h-5" />
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 cursor-pointer" />
                            ) : (
                                <Menu className="w-6 h-6 cursor-pointer" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="px-4 py-3 space-y-1">
                        <NavigationLinks isMobile={true} url={url} onLinkClick={() => setIsMenuOpen(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
}