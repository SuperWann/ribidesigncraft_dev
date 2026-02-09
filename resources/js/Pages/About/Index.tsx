import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <>
      <Head title="Tentang" />
      <div>
        <UserLayout>
          <div>
            <h2 className="text-2xl font-bold mb-4">Halaman Tentang</h2>
          </div>
        </UserLayout>
      </div>
    </>
  );
}