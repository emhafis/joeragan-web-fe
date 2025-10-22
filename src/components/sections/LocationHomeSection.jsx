export default function LocationHomeSection() {
  return (
    <section className="bg-secondary py-20 px-6 md:px-12 xl:px-32">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-white mb-12">
        Temukan Kami
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Map */}
        <div className="col-span-2 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.027104874898!2d95.3526088!3d5.5630006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040376c8c2f5597%3A0x9f96d20e68f3c0b4!2sKantor%20Joeragan%20Properti%20Banda%20Aceh!5e0!3m2!1sid!2sid!4v1759390033245!5m2!1sid!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-6 text-white">
          {/* Logo */}
          <div className="w-full">
            <img
              src="/images/logo/white-logo.png"
              alt="Joeragan Properti Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Company Info */}
          <div className="space-y-3 text-sm md:text-base leading-relaxed">
            <p>
              <span className="font-semibold">Legalitas</span> : Perseroan
              Terbatas (PT)
            </p>
            <p>
              <span className="font-semibold">Alamat</span> : Kantor Joeragan
              Properti, Jl. Kebun Raja, Ie Masen Kaye Adang, Kec. Syiah Kuala,
              Kota Banda Aceh, Aceh 24412
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
