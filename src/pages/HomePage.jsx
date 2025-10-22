import Navbar from "../components/layouts/Navbar";
import AboutHomeSection from "../components/sections/AboutHomeSection";
import HeroHomeSection from "../components/sections/HeroHomeSection";
import ServiceHomeSection from "../components/sections/ServiceHomeSection";
import ProjectHomeSection from "../components/sections/ProjectHomeSection";
import ClientHomeSection from "../components/sections/ClientHomeSection";
import LocationHomeSection from "../components/sections/LocationHomeSection";
import Footer from "../components/layouts/Footer";

export default function HomePage() {
  return(
    <div className="d">
      <Navbar />
      <HeroHomeSection />
      <ServiceHomeSection />
      <AboutHomeSection />
      <ProjectHomeSection />
      <ClientHomeSection />
      <LocationHomeSection />
      <Footer />
    </div>
  )
}