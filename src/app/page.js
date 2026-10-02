import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Admissions from "@/components/sections/Admissions";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <Contact />
      <Footer />
    </main>
  );
}