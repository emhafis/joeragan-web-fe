import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { STORAGE_BASE_URL } from "../config/api";
import { API_BASE_URL } from "../config/api";

export default function PropertyDetailPage() {
  const { slug } = useParams(); // <-- ambil slug dari URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/property/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProperty(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p className="text-center py-20 text-gray-500">Loading...</p>;
  }

  if (!property) {
    return <p className="text-center py-20 text-gray-500">Properti tidak ditemukan.</p>;
  }

  return (
    <div>
      <Navbar />

      <div className="py-24 px-8 xl:px-32 ">
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 h-1/2">

          {/* Gambar utama */}
          <div className="w-full rounded-lg overflow-hidden">
            {property.featured_image || property.images?.[0] ? (
              <img
                src={
                  property.featured_image
                    ? `${STORAGE_BASE_URL}/${property.featured_image}`
                    : property.images?.[0]
                }
                alt={property.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-100"></div>
            )}
          </div>


          {/* Detail konten */}
          <div className="flex flex-col justify-between">
            <div>
              <div
                className="py-2 text-sm text-textGray divb-6 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                  Kembali</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                {property.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">by Joeragan Properti</p>
              <p className="text-gray-700 mb-4">{property.description}</p>

              <div className="text-sm text-gray-500 mb-4 space-y-1">
                <p><strong>Alamat:</strong> {property.address}</p>
                <p><strong>Luas Tanah:</strong> {property.land_area} m²</p>
                <p><strong>Harga:</strong> Rp {property.price?.toLocaleString()}</p>
                <p><strong>Tersisa:</strong> {property.remaining_units} unit</p>
              </div>

              {property.facilities?.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Fasilitas:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {property.facilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg mt-4 transition-all"
              onClick={() => alert(`Konsultasi untuk ${property.name}`)}
            >
              Konsultasi
            </button>
          </div>
        </div>

        {/* Images */}
        {property.images?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-12 gap-4">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={
                  image.includes("http")
                    ? image
                    : `${STORAGE_BASE_URL}/${image}`
                }
                alt={`Gambar ${index + 1}`}
                className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300 rounded-md overflow-hidden"
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
