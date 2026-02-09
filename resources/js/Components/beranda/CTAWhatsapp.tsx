import { MessageCircle } from 'lucide-react';

const CTAWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281231544621"; 
    const message = "Halo! Saya tertarik dengan produk handcraft Ribi Shop";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-linear-to-br from-green-400 to-green-600">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Siap untuk Mendapatkan Handcraft Kami?
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan produk handcraft berkualitas sesuai kebutuhan Anda!
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chat via WhatsApp</span>
          </button>
          
          <p className="mt-6 text-sm text-gray-500">
            Respon cepat • Konsultasi gratis • Custom order available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAWhatsApp;