import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero /> {/* Hero section with particles */}
      <About /> {/* Gradient background starts here */}
      <Experience/>
      <Projects />
     <ContactForm/>
      <Footer />
    </div>
  );
}