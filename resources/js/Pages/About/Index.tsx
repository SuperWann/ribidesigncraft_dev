import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';

const ContentCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg ${className}`}>
    {children}
  </div>
);

export default function Index() {
  return (
    <>
      <Head title="Tentang" />
      <div>
        <UserLayout>
          <section className="relative text-center text-white overflow-hidden bg-secondary h-64 md:h-72 flex flex-col justify-center">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1516783154360-123b392d0833?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us Background"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </section>
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="relative z-10 -mt-32 md:-mt-36 pb-16">
              <ContentCard className="max-w-3xl mx-auto transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/assets/about/owner_esd.webp"
                    alt="Foto Dwi Rima Yustitia"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover -mt-24 md:-mt-28 mb-4
                                        border-8 border-white shadow-xl"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-1">
                    Dwi Rima Yustitia 
                  </h2>
                  <p className="text-lg font-semibold text-blue-600">
                    Founder – Ribi Design & Craft
                  </p>
                </div>

                <hr className="my-6 border-gray-200" />

                <div>
                  <h3 className="text-xl font-bold text-black mb-3 text-left">Tentang</h3>
                  <p className="text-black leading-relaxed text-justify">
                    Ribi Design & Craft adalah toko online yang didirikan oleh Dwi Rima Yustitia, seorang pengusaha muda yang memiliki passion dalam dunia kerajinan tangan. Dengan latar belakang pendidikan di bidang desain, Dwi memulai bisnis ini dengan tujuan untuk mempromosikan keindahan dan keunikan produk-produk kerajinan tangan.
                  </p>
                  <p className="text-black leading-relaxed text-left mt-3">
                    Email: <a href="dwirimayustitia@gmail.com" className="text-black hover:underline">dwirimayustitia@gmail.com</a>
                  </p>
                </div>
              </ContentCard>
            </div>
          </main>
        </UserLayout>
      </div>
    </>
  );
}