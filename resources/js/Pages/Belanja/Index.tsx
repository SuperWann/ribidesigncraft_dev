import UserLayout from '@/Layouts/UserLayout';
import Belanja from '@/Components/belanja/Belanja';
import { Head } from '@inertiajs/react';

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

interface PageProps {
    products: Product[];
    categories: Category[];
}

export default function Index({ products, categories }: PageProps) {
    return (
        <>
            <Head title="Belanja" />
            <UserLayout>
                <Belanja products={products} categories={categories} />
            </UserLayout>
        </>
    );
}