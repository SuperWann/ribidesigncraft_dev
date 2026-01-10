import Hero from '@/Components/beranda/Hero';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';


export default function Index() {
  return (
    <>
      <Head title="Beranda" />
      <div>
        <UserLayout>
          <Hero />
        </UserLayout>
      </div>
    </>
  );
}