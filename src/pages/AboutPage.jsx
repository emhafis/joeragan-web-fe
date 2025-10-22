import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"

export default function AboutPage() {
  return (
    <div className="d">
      <Navbar />

      {/* Hero Section */}
      <div className="h-[75vh] relative py-24 px-8 xl:px-32 bg-[url('/images/dummy2.png')] bg-center bg-cover">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />

        {/* Text Content di bawah */}
        <div className="absolute bottom-0 left-0 right-0 px-8 xl:px-32 pb-12 z-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white py-1">
              Tentang Kami
            </h2>
            <small className="text-white px-1">Joeragan Properti</small>
            <p className="text-md text-white py-6">
              Perusahaan Properti Ter-Ramah Yang Siap Bantu Seluruh Kebutuhan Terkait Properti Anda. Bersama Joeragan Properti, #BeraniMelangkahMembangunNegeri
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {/* <div className="grid grid-cols-2 py-20">
        <img
          src="/images/dummy.jpg"
          alt="Joeragan Properti Hero"
          className="w-full h-1/2 object-cover transition-opacity duration-700"
          loading="lazy"
        />
      </div> */}

      <div className="py-24 px-8 xl:px-32">
        <h2 className="text-3xl font-semibold text-primary py-1">
          Sekilas Tentang Joeragan Properti
        </h2>
        <div className="text-md text-textGray py-6 text-justify leading-relaxed">
          <p className="py-2">
            Joeragan Properti adalah perusahaan yang bergerak di bidang pengembangan dan pemasaran perumahan, jasa konstruksi, serta layanan interior dan eksterior properti yang berpusat di Aceh. Dengan visi menjadi pengembang properti terintegrasi dan terbesar di Aceh, Joeragan Properti berkomitmen untuk menghadirkan pertumbuhan nilai yang berkelanjutan melalui inovasi, efisiensi, dan pelayanan terbaik. 
          </p>
          
          <p className="py-2">
            Sebagai perusahaan yang fokus memberikan solusi menyeluruh untuk kebutuhan properti masyarakat Aceh, Joeragan Properti menghadirkan berbagai lini layanan seperti Joeragan Residence untuk pengembangan kawasan perumahan modern, Joeragan Kosan untuk pembangunan dan pengelolaan hunian kos yang strategis, Joeragan Konstruksi untuk jasa pembangunan dan renovasi rumah, toko, serta kantor, dan Joeragan Interior untuk layanan desain serta renovasi interior dan eksterior. 
          </p>
          
          <p className="py-2">
            Hingga kini, Joeragan Properti telah membangun lebih dari 20 lokasi perumahan—termasuk Triputra Residence dan Joeragan Residence—serta 5 lokasi kosan eksklusif di area Banda Aceh dan Aceh Besar, disertai puluhan proyek konstruksi lainnya yang mencakup pembangunan rumah, toko, kantor, dan tempat usaha. 
          </p>
          
          <p className="py-2">
            Dengan komitmen penuh terhadap kualitas dan kepuasan pelanggan, Joeragan Properti terus berkembang menjadi perusahaan yang unggul, inovatif, dan terpercaya dalam memberikan nilai terbaik bagi pelanggan, mitra bisnis, pemegang saham, karyawan, dan masyarakat luas.
          </p>
        </div>

      </div>

      <div className="pb-24 px-8 xl:px-32">
        <h2 className="text-3xl font-semibold text-primary py-1">
          Visi, Misi dan Nilai Perusahaan
        </h2>

        <img src="/images/dummy.jpg" alt="" className="my-12 h-60 w-full object-cover" />

        <div className="grid md:grid-cols-2 gap-12 mb-24 px-2">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-primary py-1">Visi</h3>
            <p className="text-subtle-light dark:text-subtle-dark">Menjadi pengembang properti terkemuka di Aceh yang dikenal dengan kualitas, inovasi, dan kepuasan pelanggan.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-primary py-1">Misi</h3>
            <ul className="space-y-2 text-subtle-light dark:text-subtle-dark list-disc list-inside">
              <li>Mengembangkan proyek properti yang memenuhi standar kualitas tertinggi.</li>
              <li>Menerapkan inovasi dalam desain dan konstruksi.</li>
              <li>Membangun hubungan jangka panjang dengan pelanggan.</li>
              <li>Berkontribusi pada pembangunan berkelanjutan di Aceh.</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-8 mb-16">
          <h3 className="text-3xl font-semibold text-primary py-1">Nilai-Nilai Perusahaan</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8">
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center">
              <h4 className="font-bold text-lg mb-2">Integritas</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Kejujuran dan transparansi dalam setiap aspek bisnis.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center">
              <h4 className="font-bold text-lg mb-2">Kualitas</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Komitmen pada produk dan layanan dengan kualitas terbaik.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center">
              <h4 className="font-bold text-lg mb-2">Inovasi</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Terus mencari cara baru untuk meningkatkan dan beradaptasi.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark/50 p-6 rounded-lg border border-border-light dark:border-border-dark text-center">
              <h4 className="font-bold text-lg mb-2">Pelayanan Pelanggan</h4>
              <p className="text-sm text-subtle-light dark:text-subtle-dark">Mengutamakan kepuasan pelanggan dan melampaui harapan.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
