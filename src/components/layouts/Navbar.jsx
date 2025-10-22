import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <div className="z-20 bg-white shadow-sm text-basic fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between py-8 px-8 xl:px-32">

        {/* Logo n Name */}
        <Link to='/'>
          <div className="flex flex-row gap-2 items-center">
            <img
              className="max-h-6"
              src="/jp-favicon.png"
              alt=""
            />

            <div className="text-primary font-semibold whitespace-nowrap">
              Joeragan Properti
            </div>
          </div>
        </Link>

        {/* Nav item desktop */}
        <nav className="hidden xl:flex items-center gap-8 text-sm">
          <Link to='/about'>
            <p className="hover:text-primary">
              Tentang Kami
            </p>
          </Link>
          <Link to='/projects'>
            <p className="hover:text-primary">
              Konstruksi dan Interior
            </p>
          </Link>
          <Link to='/properties'>
            <p className="hover:text-primary">
              Perumahan dan Kosan
            </p>
          </Link>
          <a href="https://wa.me/085270620425">
            <p className="hover:text-primary">
              Kontak Kami
            </p>
          </a>
        </nav>

        <button
          aria-label="Toggle navigation"
          className="xl:hidden text-2xl focus:outline-none"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          {navIsOpen
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          }
        </button>
      </div>

      <div
        className={`
          xl:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${navIsOpen
            ? "h-full"
            : "max-h-0 opacity-0"
          }
        `} >

        <div className="flex flex-col gap-12 px-12 py-8 text-start">
          <Link className="text-md hover:text-primary" to="/">Home</Link>
          <Link className="text-md" to="/about">Tentang Kami</Link>
          <Link className="text-md" to="/projects">Proyek Konstruksi dan Interior</Link>
          <Link className="text-md" to="/properties">Perumahan dan Kosan</Link>
          <Link className="text-md" to="#contact">Lihat Perumahan dan Kosan</Link>
        </div>

        <div className="border-t py-6 text-center text-gray-600">
          <a
            href="https://www.instagram.com/joeraganproperticom/">
            Follow us
          </a>
        </div>

      </div>
    </div>
  )
}