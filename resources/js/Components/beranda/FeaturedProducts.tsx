import { Heart, ImageOff, ShoppingCart, Star } from 'lucide-react';

const FeaturedProducts = ({ products = [] }) => {
  const formatImageUrl = (url: string) => {
    return `storage/${url}`;
  }
  const formatPrice = (price: string | number | bigint) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(Number(price));
  };

  const defaultProducts = [
    {
      product_id: 1,
      name: "Rajutan Boneka Teddy Bear",
      price: 75000,
      images: [{ image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=500&h=500&fit=crop" }],
      category: { name: "Boneka" }
    },
    {
      product_id: 2,
      name: "Tas Anyaman Rotan Premium",
      price: 150000,
      images: [{ image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop" }],
      category: { name: "Tas Anyaman" }
    },
    {
      product_id: 3,
      name: "Bros Floral Handmade",
      price: 35000,
      images: [{ image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=500&fit=crop" }],
      category: { name: "Aksesoris" }
    },
    {
      product_id: 4,
      name: "Dekorasi Dinding Makrame",
      price: 120000,
      images: [{ image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop" }],
      category: { name: "Dekorasi Rumah" }
    }
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Koleksi handcraft pilihan yang paling diminati pelanggan kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div
              key={product.product_id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-square">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images && product.images.length > 0 ? formatImageUrl(product.images[0].image) : 'https://via.placeholder.com/300'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <ImageOff className="text-gray-400 text-sm font-medium w-12 h-12" />
                  </div>
                )}
                <div className="absolute top-3 left-3 space-y-2">
                  <button className="p-2 bg-yellow-400 rounded-full shadow-md text-white transition-colors duration-300">
                    <Star className="w-5 h-5 fill-yellow-600 text-yellow-600" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs text-blue-600 font-semibold mb-1">
                  {product.category?.name || 'Kategori'}
                </p>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">4.9</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/belanja"
            className="inline-block px-8 py-3 bg-linear-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Lihat Semua Produk
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;