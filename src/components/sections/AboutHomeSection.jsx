import { Link } from "react-router-dom"

export default function AboutHomeSection() {
  return (
    <div className="relative py-24 px-8 xl:px-32 bg-[url('/images/dummy2.png')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent opacity-80" />
      <div className="relative z-10 w-full md:w-1/2 py-12">
        <h2 className="text-4xl font-bold text-white py-1">
          Tentang Kami
        </h2>
        <small className="text-white px-1">Joeragan Properti</small>
        <p className="text-md text-white py-6">
          Kami adalah perusahaan yang bergerak di bidang konstruksi, properti, dan interior.
          Dengan pengalaman dan tenaga profesional, kami berkomitmen menghadirkan hunian serta ruang kerja yang nyaman, fungsional, dan bernilai tinggi bagi setiap klien kami.
        </p>
        <Link
          to='/about'
          className="w-fit mt-6 flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-full shadow-lg hover:bg-white hover:text-primary border-2 border-white transition-all duration-300"
        >
          Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </Link>
      </div>
    </div>
  )
}