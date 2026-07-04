import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    review:
      "This platform completely transformed our workflow. The performance and UI are absolutely world-class.",
    rating: 5,
  },
  {
    name: "Ali Khan",
    role: "Founder",
    company: "StartupX",
    review:
      "Super smooth experience. It feels like a premium enterprise SaaS product built by top engineers.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Product Manager",
    company: "Innovate Inc",
    review:
      "The analytics and collaboration tools are insanely good. It improved our productivity instantly.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Trusted by Industry Leaders
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mt-4">
          Real feedback from real customers worldwide
        </p>
      </div>

      {/* Main Card */}
      <div className="relative">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-2xl rounded-3xl p-10 relative transition-colors duration-500"
          >

            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 text-slate-200 dark:text-slate-700 w-10 h-10" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-8 italic">
              "{testimonials[index].review}"
            </p>

            {/* User Info */}
            <div className="mt-8 flex items-center justify-between">

              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {testimonials[index].name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonials[index].role} • {testimonials[index].company}
                </p>
              </div>

              <a
                href="#contact"
                className="text-xs px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 font-semibold hover:scale-105 transition"
              >
                Verified User
              </a>

            </div>

          </motion.div>
        </AnimatePresence>

                {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-slate-700 p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-slate-700 p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

      </div>

      {/* Trust Strip */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm font-semibold">

        <a
          href="#product"
          className="text-slate-500 dark:text-slate-300 hover:text-emerald-500 transition"
        >
          ✔ 10,000+ Active Users
        </a>

        <a
          href="#pricing"
          className="text-slate-500 dark:text-slate-300 hover:text-emerald-500 transition"
        >
          ✔ 99.9% Satisfaction Rate
        </a>

        <a
          href="#features"
          className="text-slate-500 dark:text-slate-300 hover:text-emerald-500 transition"
        >
          ✔ Trusted Globally
        </a>

      </div>

    </section>
  );
};

export default Testimonials;