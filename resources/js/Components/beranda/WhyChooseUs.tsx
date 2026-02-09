import { Award, Sparkles, Package, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Terjamin",
      description: "Setiap produk dibuat dengan detail dan bahan berkualitas tinggi"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Handmade dengan Cinta",
      description: "Dibuat dengan tangan oleh pengrajin berpengalaman"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Kemasan Aman",
      description: "Dikemas dengan rapi dan aman untuk pengiriman"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Custom Order",
      description: "Bisa request desain sesuai keinginan Anda"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Pilih Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan produk handcraft terbaik dengan layanan yang memuaskan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-linear-to-br from-blue-400 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;