import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>

      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[120px]"></div>

      <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[120px]"></div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-emerald-400/20 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full font-semibold mb-8">

            <Sparkles size={18} />

            AI Powered SaaS Platform

          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">

            Build The Future Of

            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">

              Modern Business

            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl leading-8 text-slate-600 dark:text-slate-300">

            Empower your business with intelligent automation,
            advanced analytics, cloud collaboration and enterprise
            security — all in one modern SaaS platform.

          </p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="flex flex-wrap justify-center gap-5 mt-12"
          >

            <button
              className="group flex items-center gap-3
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white px-9 py-4 rounded-2xl font-bold
              shadow-xl hover:scale-105 transition"
            >

              Get Started

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />

            </button>

            <button
              className="group flex items-center gap-3
              bg-white dark:bg-slate-900
              border border-slate-300 dark:border-slate-700
              text-slate-900 dark:text-white
              px-9 py-4 rounded-2xl font-bold
              hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >

              <PlayCircle size={22} />

              Watch Demo

            </button>

          </motion.div>

          {/* Scroll */}

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.6
            }}
            className="flex justify-center mt-20"
          >

            <a href="ProductShowcase">

              <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">

                <ChevronDown className="text-blue-600 dark:text-blue-400" />

              </div>

            </a>

          </motion.div>

        </motion.div>

        {/* ================= PRODUCT PREVIEW ================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-24"
        >

          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 blur-3xl rounded-[40px]"></div>

          <div className="relative rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl">

            {/* Window Header */}

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">

              <div className="flex items-center gap-2">

                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>

              </div>

              <p className="text-sm text-slate-500 dark:text-slate-300 font-semibold">
                AI Dashboard
              </p>

              <div></div>

            </div>

            {/* Dashboard */}

            <div className="grid lg:grid-cols-3 gap-6 p-8">

              {/* LEFT */}

              <div className="lg:col-span-2">

                {/* Stats */}

                <div className="grid md:grid-cols-3 gap-5">

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-6">

                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Revenue
                    </p>

                    <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">
                      $128K
                    </h2>

                    <span className="text-green-500 text-sm font-semibold">
                      +18.6%
                    </span>

                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-6">

                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Customers
                    </p>

                    <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">
                      24.5K
                    </h2>

                    <span className="text-blue-600 text-sm font-semibold">
                      +2.1K
                    </span>

                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-6">

                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Growth
                    </p>

                    <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">
                      96%
                    </h2>

                    <span className="text-emerald-500 text-sm font-semibold">
                      Excellent
                    </span>

                  </div>

                </div>

                {/* Graph */}

<div className="mt-8 rounded-2xl bg-slate-50 dark:bg-slate-800 p-6">

  <h3 className="font-bold text-slate-800 dark:text-white mb-6">
    Monthly Performance
  </h3>

  <div className="flex items-end justify-between h-64 gap-3">

    {[45, 70, 55, 95, 60, 85, 50, 100].map((item, index) => (

      <div key={index} className="flex-1 h-full flex items-end group">

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${item}%` }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
          }}
          className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 via-purple-500 to-cyan-400 relative"
        >

          <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded">
            {item}%
          </div>

        </motion.div>

      </div>

    ))}

  </div>

  <div className="flex justify-between mt-4 text-xs text-slate-500 dark:text-slate-400">
    <span>Jan</span>
    <span>Feb</span>
    <span>Mar</span>
    <span>Apr</span>
    <span>May</span>
    <span>Jun</span>
    <span>Jul</span>
    <span>Aug</span>
  </div>

</div>

</div>

{/* RIGHT */}

<div className="space-y-5">

  <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">

    <p className="text-sm opacity-80">
      Active Users
    </p>

    <h2 className="text-4xl font-black mt-2">
      250K+
    </h2>

    <p className="mt-3 text-sm">
      Live users connected worldwide.
    </p>

  </div>

  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-6">

    <p className="text-slate-500 dark:text-slate-400 text-sm">
      Server Status
    </p>

    <div className="flex items-center gap-3 mt-4">

      <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>

      <span className="font-semibold text-slate-900 dark:text-white">
        All Systems Operational
      </span>

    </div>

  </div>

  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-6">

    <p className="text-slate-500 dark:text-slate-400 text-sm">
      AI Prediction
    </p>

    <h2 className="text-3xl font-black mt-2 text-blue-600">
      +42%
    </h2>

    <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">
      Expected revenue increase next month.
    </p>

  </div>

</div>

</div>

</div>

</motion.div>

{/* ================= TRUSTED COMPANIES ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="mt-20 text-center"
>

  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
    Trusted by modern companies worldwide
  </p>

  <div className="flex flex-wrap justify-center gap-10 opacity-60 text-slate-600 dark:text-slate-300 font-bold text-lg">

    <span>Google</span>
    <span>Microsoft</span>
    <span>Amazon</span>
    <span>Meta</span>
    <span>Netflix</span>

  </div>

</motion.div>

{/* ================= FLOATING BADGES ================= */}

<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ repeat: Infinity, duration: 3 }}
  className="absolute top-40 left-10 hidden lg:block"
>

  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white">
    ⚡ Real-time Data
  </div>

</motion.div>

<motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ repeat: Infinity, duration: 2.5 }}
  className="absolute bottom-40 right-10 hidden lg:block"
>

  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white">
    🔒 Secure Platform
  </div>

</motion.div>

</div>

</section>
);
};

export default Hero;