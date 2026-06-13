import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import CoreCapabilities from "../components/sections/CoreCapabilities";
import About from "../components/sections/About";
import Solutions from "../components/sections/Solutions";
import PlatformComparison from "../components/sections/PlatformComparison";
import SuccessStories from "../components/sections/SuccessStories";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import FAQ from "../components/sections/FAQ";
import PrivacyTerms from "../components/sections/PrivacyTerms";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  useEffect(() => {
    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CoreCapabilities />
      <About />
      <Solutions />
      <PlatformComparison />
      <SuccessStories />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <PrivacyTerms />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
