import demoVideo from "../assets/videos/demo.mp4";
import posterImage from "../assets/image1.jpeg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Star,
  Play,
  X,
  Image as ImageIcon,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Analytics",
    icon: BarChart3,
    color: "from-emerald-500 to-green-400",
    description:
      "Generate real-time business insights using AI-powered analytics dashboards.",
  },
  {
    id: 2,
    title: "Team Workspace",
    icon: Users,
    color: "from-blue-500 to-cyan-400",
    description:
      "Collaborate with your entire team using secure cloud workspaces.",
  },
  {
    id: 3,
    title: "Ultra Performance",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    description:
      "Optimized infrastructure delivering lightning-fast performance worldwide.",
  },
  {
    id: 4,
    title: "Enterprise Security",
    icon: Shield,
    color: "from-violet-500 to-fuchsia-500",
    description:
      "Bank-level encryption and enterprise security protecting your business.",
  },
];

const stats = [
  { number: "250K+", title: "Active Users" },
  { number: "99.99%", title: "Uptime" },
  { number: "180+", title: "Countries" },
  { number: "4.9★", title: "Customer Rating" },
];

const gallery = [
  {
    id: 1,
    title: "Analytics Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    id: 2,
    title: "Team Collaboration",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  },
  {
    id: 3,
    title: "Mobile Experience",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  },
  {
    id: 4,
    title: "Data Visualization",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  },
  {
    id: 6,
    title: "Secure Payments",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  },
];

export default function ProductShowcase() {
  const [activeFeature, setActiveFeature] = useState(1);
  const [lightbox, setLightbox] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">

      {/* Background Blur */}

      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <span className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full font-semibold mb-6">
            <Star className="w-4 h-4" />
            PRODUCT SHOWCASE
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900 dark:text-white">
            Built For

            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600 dark:text-slate-300 leading-8">
            Discover a powerful SaaS platform engineered for speed,
            collaboration, automation and enterprise-grade security.
          </p>

        </motion.div>

        {/* Interactive Feature Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;
            const isActive = activeFeature === item.id;

            return (

              <motion.button
                type="button"
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFeature(item.id)}
                className="relative group text-left"
              >

                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition duration-500 ${
                    isActive ? "opacity-40" : ""
                  }`}
                />

                <div
                  className={`relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border rounded-3xl p-8 shadow-xl transition-all duration-300 h-full ${
                    isActive
                      ? "border-blue-400 ring-2 ring-blue-400/40"
                      : "border-white dark:border-slate-700"
                  }`}
                >

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg mb-7`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 leading-7">
                    {item.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-2 mt-8 font-semibold text-blue-600 dark:text-blue-400"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </motion.div>

                </div>

              </motion.button>

            );

          })}

        </div>

        {/* Active Feature Preview */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white dark:border-slate-700 shadow-xl p-10 flex flex-col md:flex-row items-center gap-8"
          >

            {(() => {

              const f = features.find((x) => x.id === activeFeature);
              if (!f) return null;

              const Icon = f.icon;

              return (
                <>
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${f.color} flex items-center justify-center shadow-2xl shrink-0`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  <div className="flex-1 text-center md:text-left">

                    <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                      Now viewing: {f.title}
                    </h3>

                    <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
                      {f.description} Click any card above to interactively
                      explore each capability of the platform.
                    </p>

                  </div>
                </>
              );
            })()}

          </motion.div>

        </AnimatePresence>

                {/* Video Preview */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              See It In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Action
              </span>
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Watch a 60-second product tour.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="relative group block w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
          >
            <img
              src={posterImage}
              alt="Product video preview"
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-24 h-24 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur flex items-center justify-center shadow-2xl">
                <Play
                  className="w-10 h-10 text-blue-600 dark:text-blue-400 ml-1"
                  fill="currentColor"
                />
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-6 text-white text-left">
              <p className="text-sm opacity-80">
                Product Tour
              </p>

              <p className="text-xl font-bold">
                Watch the platform overview
              </p>
            </div>
          </button>
        </motion.div>

        {/* Image Gallery */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-10">

            <span className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-5 py-2 rounded-full font-semibold mb-4">
              <ImageIcon className="w-4 h-4" />
              GALLERY
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Explore The Interface
            </h3>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

            {gallery.map((img, i) => (

              <motion.button
                type="button"
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setLightbox(img)}
                className={`relative group rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >

                <img
                  src={img.src}
                  alt={img.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-full min-h-[300px]" : "h-56"
                  }`}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-4 left-4 right-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">

                  <p className="font-bold text-lg">
                    {img.title}
                  </p>

                  <p className="text-sm opacity-80">
                    Click to expand
                  </p>

                </div>

              </motion.button>

            ))}

          </div>

        </motion.div>

                {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-lg p-8 text-center"
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>

        {lightbox && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-6 cursor-zoom-out"
          >

            <motion.div
              initial={{ scale: .9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >

              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition"
              >
                <X className="w-8 h-8" />
              </button>

              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full rounded-3xl shadow-2xl"
              />

              <p className="text-center text-white text-xl font-semibold mt-6">
                {lightbox.title}
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* ================= VIDEO MODAL ================= */}

      <AnimatePresence>

        {videoOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >

            <motion.div
              initial={{ scale: .9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >

              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition"
              >
                <X className="w-6 h-6" />
              </button>

              <video
                src={demoVideo}
                poster={posterImage}
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}