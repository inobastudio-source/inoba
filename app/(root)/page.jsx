import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import OurTeam from "@/components/OurTeam";
import FindUs from "@/components/FindUs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUs />
      <Brands />
      <Gallery />
      <OurTeam />
      <FindUs />
    </main>
  );
};