import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import ServiceArea from "@/components/ServiceArea";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Benefits />
        <About />
        <ServiceArea />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
