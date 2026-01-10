import Hero from '@/Components/beranda/Hero';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <>
      <Head title="Wishlist" />
      <div>
        <UserLayout>
          <div>
            <h2 className="text-2xl font-bold mb-4">Halaman Wishlist</h2>
          </div>
        </UserLayout>
      </div>
    </>
  );
}