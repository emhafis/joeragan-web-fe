import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import PropertyCard from "../components/ui/PropertyCard";
import { useEffect, useState } from "react";
import PropertyCategoryTabs from "../components/ui/PropertyCategoryTabs";
import { API_BASE_URL } from "../config/api";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Semua Kategori");

  useEffect(() => {
    fetch(`${API_BASE_URL}/properties`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProperties(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter data sesuai tab aktif
  const filtered = properties.filter((p) => {
    if (activeCategory === "Kosan") return p.category === "kosan";
    if (activeCategory === "Residence") return p.category === "residence";
    return true; // Semua Kategori
  });

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="h-[75vh] relative py-24 px-8 xl:px-32 bg-[url('/images/dummy.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 px-8 xl:px-32 pb-12 z-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white py-1">
              Miliki Perumahan dan Kosan
            </h2>
            <small className="text-white px-1">Joeragan Properti</small>
            <p className="text-md text-white py-6">
              Joeragan Properti membantu Anda memiliki hunian impian dan investasi kosan yang menguntungkan. Dengan perencanaan matang dan kualitas pembangunan terbaik.
            </p>
          </div>
        </div>
      </div>

      {/* Daftar Properti */}
      <div className="py-20 px-8 xl:px-32 md:px-16 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary text-center sm:text-left">
            Daftar Perumahan dan Kosan Joeragan Properti
          </h2>

          {/* Tabs */}
          <PropertyCategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>



        {/* Grid properti */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">
            Tidak ada properti yang ditemukan.
          </p>
        )}
      </div>


      <Footer />
    </div>
  );
}
