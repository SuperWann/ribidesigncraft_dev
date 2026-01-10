import Hero from '@/Components/beranda/Hero';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <>
      <Head title="Testimoni" />
      <div>
        <UserLayout>
          <div>
            <h2 className="text-2xl font-bold mb-4">Halaman Testimoni</h2>
          </div>
        </UserLayout>
      </div>
    </>
  );
}