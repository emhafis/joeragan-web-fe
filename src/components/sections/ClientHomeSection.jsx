import mitras from "../../data/mitras"
import testimonials from "../../data/testimonials"

export default function ClientHomeSection() {
  return (
    <div className="py-20 px-8 xl:px-32 bg-gray-50">
      <h2 className="text-4xl font-bold text-primary">
        Testimonial Client dan Mitra
      </h2>
      <p className="text-textBasic text-lg py-1">
        Testimoni Nyata Dari Client yang Telah Mempercayakan Joeragan Properti
      </p>

      <div className="relative w-full overflow-hidden pt-12">
        <div className="flex animate-scroll">
          {[...mitras, ...mitras].map((mitra, index) => (
            <div key={index} className="flex-shrink-0 px-8 md:px-12">
              <img
                src={mitra.src}
                alt={mitra.alt}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
          >
            <p className="text-lg italic text-gray-700 mb-6">{item.quote}</p>

            <div className="flex items-center gap-4 mt-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}