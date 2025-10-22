import { useState } from "react";
import { STORAGE_BASE_URL } from "../../config/api";

export default function ProjectDetailModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("after");

  if (!project) return null;

  // Ambil gambar per kategori (before, design, after)
  const images = project.images?.[activeTab] || [];

  const tabs = [
    { key: "before", label: "Sebelum dan Progress" },
    { key: "design", label: "Desain / Renderan" },
    { key: "after", label: "Hasil Akhir" },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col animate-fade-in-scale overflow-hidden">

        {/* Header */}
        <header className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {project.title}
            </h1>
            <p className="text-gray-500 mt-1">{project.location}</p>
            <p className="text-sm text-gray-400 mt-1">Nama Klien : {project.client_name}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-primary transition-colors text-xl font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </button>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-200 px-6">
          <div className="flex space-x-8 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center px-1 py-3 border-b-2 text-sm font-medium transition-colors duration-200 ${activeTab === tab.key
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Gallery */}
        <main className="flex-grow overflow-y-auto">
          <div className="p-6">
            {images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((url, i) => {
                  //apakah ini URL penuh atau file storage
                  const imageUrl = url?.includes("http")
                    ? url
                    : url
                      ? `${STORAGE_BASE_URL}/${url}`
                      : null;

                  return (
                    <div key={i} className="group aspect-square relative">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={`${project.title} - ${activeTab} ${i + 1}`}
                          className="w-full h-full object-cover rounded-lg cursor-pointer transform group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            // kalau URL rusak atau gagal dimuat → ganti jadi gradient
                            e.target.style.display = "none";
                            e.target.parentElement.querySelector(
                              ".fallback-gradient"
                            ).style.display = "block";
                          }}
                        />
                      ) : null}

                      {/* Fallback gradient */}
                      <div
                        className="fallback-gradient hidden w-full h-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-100"
                      ></div>

                      {/* Overlay efek hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-400 italic">
                Belum ada gambar di kategori ini.
              </p>
            )}
          </div>
        </main>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
