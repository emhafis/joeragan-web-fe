import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import { STORAGE_BASE_URL } from "../../config/api";

export default function ProjectCard({ project }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex flex-col">

        <div className="relative h-48 w-full rounded-lg overflow-hidden group">
          {project.featured_image ? (
            <img
              src={`${STORAGE_BASE_URL}/${project.featured_image}`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-100"></div>
          )}

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setOpenModal(true)}
              className="border border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Lihat Gambar Lainnya
            </button>
          </div>
        </div>

        <span className="pt-2 font-semibold text-md">{project.title}</span>
        <p className="text-textGray text-sm">{project.location}</p>
      </div>

      {openModal && (
        <ProjectDetailModal
          project={project}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}
