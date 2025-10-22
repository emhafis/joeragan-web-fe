import services from "../../data/services";

export default function ServiceHomeSection() {
  return (
    <div className="py-20 px-8 xl:px-32">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-4xl font-bold text-primary">
          Layanan Profesional
        </h2>
        <p className="text-textBasic text-lg py-1">
          <span className="font-bold text-primary">Joeragan Properti</span>{" "}
          merupakan perusahaan yang berfokus memberikan solusi bagi kebutuhan
          jasa seputar properti di Aceh. Informasi dan produk layanan yang
          diberikan cukup beragam, seperti:
        </p>

        <div className="py-6 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-full h-60 md:h-96 rounded-xl overflow-hidden group"
            >
              {/* Gambar utama atau fallback gradient */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title || "Service Image"}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.querySelector(
                      ".fallback-gradient"
                    ).style.display = "block";
                  }}
                />
              ) : null}

              {/* Fallback gradient */}
              <div className="fallback-gradient hidden w-full h-full bg-gradient-to-r from-gray-200 to-gray-100"></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Konten overlay */}
              <div className="absolute inset-0 flex flex-col justify-end py-8 px-6 transition-all duration-500">
                <div className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {service.logo ? (
                    <img
                      src={service.logo}
                      alt={`${service.title} logo`}
                      className="w-1/2 h-full object-contain py-6"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  ) : (
                    <div className="w-1/2 h-16 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg my-6"></div>
                  )}
                </div>

                <span className="font-semibold text-lg text-white">{service.title}</span>
                <p className="text-sm text-white py-1 line-clamp-1 transition-all duration-500 group-hover:line-clamp-none">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}