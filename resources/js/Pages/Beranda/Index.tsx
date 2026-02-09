import Hero from '@/Components/beranda/Hero';
import WhyChooseUs from '@/Components/beranda/WhyChooseUs';
import FeaturedProducts from '@/Components/beranda/FeaturedProducts';
import Testimonials from '@/Components/beranda/Testimonials';
import LocationMap from '@/Components/beranda/LocationMap';
import CTAWhatsApp from '@/Components/beranda/CTAWhatsapp';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';


export default function Index({ featuredProducts = [], testimonials = [] }) {
  return (
    <>
      <Head title="Beranda" />
      <UserLayout>
        <Hero />
        <WhyChooseUs />
        <FeaturedProducts products={featuredProducts} />
        <Testimonials testimonials={testimonials} />
        <LocationMap />
        <CTAWhatsApp />
      </UserLayout>
    </>
  );
}