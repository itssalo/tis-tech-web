import Navbar from "@/components/layout/Navbar";
import HomeSection from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import About from "@/sections/About";
import Solutions from "@/sections/Solutions";
import Partners from "@/sections/Partners";
import Products from "@/sections/Products";
import Countries from "@/sections/Countries";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HomeSection />
        <About />
        <Solutions />
        <Partners />
        <Products />
        <Countries />
        <Contact />
      </main>

      <Footer />
    </>
  );
}