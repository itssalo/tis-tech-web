import Navbar from "@/components/layout/Navbar";
import HomeSection from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import About from "@/sections/About";
import Solutions from "@/sections/Solutions";
import Partners from "@/sections/Partners";
import Products from "@/sections/Products";
import Contact from "@/sections/Contact";

import { companyInfo } from "@/data/company";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HomeSection
          title={companyInfo.name}
          subtitle={companyInfo.slogan}
          description={companyInfo.description}
          cta={companyInfo.cta}
        />

        <About />

        <Solutions />

        <Partners />

        <Products />

        <Contact />
      </main>

      <Footer />
    </>
  );
}