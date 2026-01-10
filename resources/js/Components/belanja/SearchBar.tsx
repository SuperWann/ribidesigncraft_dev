import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const rotating = [
    "gelang custom",
    "kalung nama",
    "souvenir wedding",
    "handmade gift",
];

export default function SearchBar({ onSearch, placeholder = "Cari produk di sini" }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % rotating.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(e.target.value);
        // Real-time search
        onSearch(e.target.value);
    };

    const clearQuery = () => {
        setQuery('');
        onSearch('');
    };

    return (
        <div className="relative w-full max-w-2xl">
            <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    className="w-full pl-12 pr-32 py-4 bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-full focus:outline-none focus:border-white focus:bg-white transition-all text-sm text-gray-900 placeholder-gray-500 shadow-lg"
                />

                {/* Animated Placeholder */}
                {query === "" && (
                    <div className="pointer-events-none absolute left-13 top-1/2 -translate-y-1/2 text-gray-500 text-sm h-5 overflow-hidden">
                        <div
                            className="transition-all duration-500 ease-out"
                            style={{ transform: `translateY(-${index * 1.25}rem)` }}
                        >
                            {[placeholder, ...rotating].map((text, i) => (
                                <div key={i} className="h-5 flex items-center">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {query.length > 0 && (
                    <button
                        onClick={clearQuery}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition text-gray-600"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}

                <button
                    onClick={handleSubmit}
                    className="absolute right-2 px-12 top-1/2 -translate-y-1/2 bg-gray-900 text-white py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-md cursor-pointer"
                >
                    Cari
                </button>
            </div>
        </div>
    );
}