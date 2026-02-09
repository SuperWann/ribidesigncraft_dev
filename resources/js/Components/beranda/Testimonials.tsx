import { Star } from 'lucide-react';

const Testimonials = ({ testimonials = [] }) => {
  const defaultTestimonials = [
    {
      testimoni_id: 1,
      user: {
        name: "Sarah Wijaya",
        profile_image: "https://i.pravatar.cc/150?img=1"
      },
      rating: 5,
      testimoni: "Boneka rajutannya lucu banget! Kualitas jahitannya rapi dan bahannya lembut. Anak saya sangat suka!",
    },
    {
      testimoni_id: 2,
      user: {
        name: "Dimas Pratama",
        profile_image: "https://i.pravatar.cc/150?img=12"
      },
      rating: 5,
      testimoni: "Tas anyamannya keren dan kuat. Cocok banget buat hadiah. Packaging-nya juga rapi!",
    },
    {
      testimoni_id: 3,
      user: {
        name: "Rina Kusuma",
        profile_image: "https://i.pravatar.cc/150?img=5"
      },
      rating: 5,
      testimoni: "Pelayanannya ramah dan cepat. Custom order sesuai request. Puas banget!",
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata Mereka
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div 
              key={testimonial.testimoni_id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.user?.profile_image || 'https://i.pravatar.cc/150'}
                  alt={testimonial.user?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.user?.name}</h4>
                  <p className="text-sm text-gray-600">Customer</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">
                "{testimonial.testimoni}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;