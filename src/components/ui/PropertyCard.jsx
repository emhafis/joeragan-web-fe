import { Link } from "react-router-dom";
import { STORAGE_BASE_URL } from "../../config/api";

export default function PropertyCard({ property }) {
  return (
    <div className="flex flex-col">
      
      <div className="h-48 w-full rounded-lg overflow-hidden">
        {property.featured_image || property.images?.[0] ? (
          <img
            src={
              property.featured_image
                ? `${STORAGE_BASE_URL}/${property.featured_image}`
                : property.images?.[0]
            }
            alt={property.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div
            className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-100 flex items-center justify-center text-gray-400 text-sm"
          >
            No Image Available
          </div>
        )}
      </div>

      <span className="pt-2 font-semibold text-lg">{property.name}</span>
      <p className="text-textGray text-sm">{property.address}</p>
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2 items-center">
          <span
            className={`px-3 py-1 text-xs rounded-full ${property.status === "available"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-500"
              }`}
          >
            {property.status === "available" ? "Tersedia" : "Tidak tersedia"}
          </span>
          <span className="text-xs text-gray-400">
            {property.remaining_units} unit tersisa
          </span>
        </div>
        <Link to={`/property/${property.slug}`}>
          <span className="text-xs text-gray-400 pr-6 hover:text-black cursor-pointer">
            Lihat Detail
          </span>
        </Link>
      </div>
    </div>
  );
}