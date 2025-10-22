import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"
import { useState, useEffect } from "react"
import ProjectCard from "../components/ui/ProjectCard"
import { API_BASE_URL } from "../config/api";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch(`${API_BASE_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProjects(data.data);
      })
      .catch((err) => console.error(err));
  }, [])

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="h-[75vh] relative py-24 px-8 xl:px-32 bg-[url('/images/dummy3.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 px-8 xl:px-32 pb-12 z-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white py-1">
              Jasa Konstruksi, Renovasi dan Interior dengan Kami
            </h2>
            <small className="text-white px-1">Joeragan Properti</small>
            <p className="text-md text-white py-6">
              Mulai dari pembangunan rumah, renovasi ruang, hingga penataan interior, kami siap membantu mewujudkan tempat yang nyaman dan berkualitas.
            </p>
          </div>
        </div>
      </div>

      {/* Daftar Properti */}
      <div className="py-20 px-8 xl:px-32 md:px-16 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary text-center sm:text-left">
            Daftar Proyek Klien Joeragan Properti
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}