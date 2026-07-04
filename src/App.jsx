import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProductShowcase from "./sections/ProductShowcase";
import Pricing from "./sections/Pricing";
import FeatureComparison from "./sections/FeatureComparison";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import BlogPreview from "./sections/BlogPreview";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {

  const [scroll, setScroll] = useState(0);
  const [dark, setDark] = useState(false);

  // Scroll Progress
  useEffect(() => {

    const handleScroll = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll((window.scrollY / total) * 100);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // Dark Mode
  useEffect(() => {

    if (dark) {

      document.documentElement.classList.add("dark");

    } else {

      document.documentElement.classList.remove("dark");

    }

  }, [dark]);

  return (

    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">

      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-emerald-500 z-[9999]"
        style={{ width: `${scroll}%` }}
      />

      <Navbar dark={dark} setDark={setDark} />

      <Hero />
      <ProductShowcase />
      <Pricing />
      <FeatureComparison />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <Contact />
      <Footer />

      {/* Back To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-[9999] bg-slate-900 dark:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-xl hover:scale-110 transition"
      >
        ↑ Top
      </button>

    </div>

  );

}