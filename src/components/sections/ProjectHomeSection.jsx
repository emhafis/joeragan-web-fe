import { Link } from "react-router-dom";
import projectShowcase from "../../data/projectShowcase";

export default function ProjectHomeSection() {
  return (
    <div className="py-20 px-8 xl:px-32">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-center">
        <h2 className="text-4xl font-bold leading-[1.2] text-primary">
          Pengerjaan Proyek oleh Joeragan Properti
        </h2>

        <div className="col-span-2">
          <div
            className="
              grid grid-cols-1 md:grid-cols-3 
              divide-y md:divide-y-0 md:divide-x divide-gray-300
              text-start xl:text-end
            "
          >
            {/* Residence */}
            <div className="flex flex-col md:pr-8 md:pb-0 pb-6">
              <p className="py-2">Residence</p>
              <h2 className="text-5xl">232+ Unit</h2>
            </div>

            {/* Kosan */}
            <div className="flex flex-col md:px-8 md:py-0 py-6">
              <p className="py-2">Kosan</p>
              <h2 className="text-5xl">106+ Unit</h2>
            </div>

            {/* Konstruksi dan Interior */}
            <div className="flex flex-col md:pl-8 md:pt-0 pt-6">
              <p className="py-2">Konstruksi dan Interior</p>
              <h2 className="text-5xl">130+ Unit</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 pt-24 items-center">

      {projectShowcase.map((item) => (
        <div key={item.id} className="flex flex-col">
          <img src={item.image} alt={item.title} className="w-full h-60 object-cover rounded-lg" />
          <span className="pt-2 font-semibold text-lg">{item.title}</span>
          <p className="text-textGray text-sm">{item.description}</p>
        </div>
      ))}

      <div className="flex py-2 pb-24 justify-center lg:justify-end">
        <Link
          to="/projects"
          className="w-fit mt-6 flex items-center gap-2 px-6 py-3 bg-transparent text-textGray rounded-full hover:bg-white hover:text-primary border-2 border-text-gray-900 transition-all duration-300"
        >
          Lihat Semua Proyek
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </Link>
      </div>
    </div>
    </div>
  );
}
