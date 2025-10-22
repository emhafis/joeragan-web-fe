export default function PropertyCategoryTabs({ activeCategory, setActiveCategory }) {
  const tabs = ["Semua Kategori", "Residence", "Kosan"];

  return (
    <section className="">
      <div className="border-b border-gray-200">
        {/* Container scroll */}
        <div className="flex overflow-x-auto scrollbar-hide px-4 sm:px-0">
          {/* Tombol kategori */}
          <div className="flex flex-nowrap sm:flex-wrap gap-4 sm:gap-6 mx-auto min-w-max sm:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`whitespace-nowrap px-4 py-2 text-sm sm:text-base font-medium border-b-2 transition-all duration-300 ${
                  activeCategory === tab
                    ? "border-primary text-gray-900 font-semibold"
                    : "border-transparent text-gray-500 hover:text-primary hover:border-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
