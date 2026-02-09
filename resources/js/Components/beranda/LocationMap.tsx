import { MapPin, Phone, Mail } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kunjungi Workshop Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Datang langsung ke workshop kami untuk melihat proses pembuatan dan produk secara langsung
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Raya Kalisetail, RT.04/RW.04,
                  <br />
                  Dusun Tegalyasan, Tegalarum, Kec. Sempu,
                  <br />
                  Kabupaten Banyuwangi, Jawa Timur 68468
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                <p className="text-gray-600">0812-3154-4621</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">dwirimayustitia@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.52796086803!2d114.1466164!3d-8.3308473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1556252237461%3A0x99fe396c5af5d210!2sOmah%20Ribi%20(Buket%2C%20hantaran%2C%20mahar%2C%20undangan%20dan%20souvenir%20sesuai%20budget%20kamu)!5e0!3m2!1sen!2sid!4v1736595012345!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Workshop Ribi Shop"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;