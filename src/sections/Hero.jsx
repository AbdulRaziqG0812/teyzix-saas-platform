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
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
      <div className="absolute -top-24 -left-24 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-blue-500/20 blur-[100px] sm:blur-[120px]"></div>
      <div className="absolute top-10 right-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-500/20 blur-[100px] sm:blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[180px] sm:w-[500px] sm:h-[250px] rounded-full bg-emerald-400/20 blur-[100px] sm:blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
            <Sparkles size={16} className="sm:size-[18px]" />
            AI Powered SaaS Platform
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white break-words">
            Build The Future Of
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Modern Business
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-5 sm:mt-8 px-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-8 text-slate-600 dark:text-slate-300">
            Empower your business with intelligent automation, advanced
            analytics, cloud collaboration and enterprise security — all in one
            modern SaaS platform.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-5 mt-8 sm:mt-12 px-4 sm:px-0"
          >
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-9 py-3.5 sm:py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition text-sm sm:text-base">
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition sm:size-5"
              />
            </button>

            <button className="group flex items-center justify-center gap-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white px-6 sm:px-9 py-3.5 sm:py-4 rounded-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm sm:text-base">
              <PlayCircle size={20} className="sm:size-[22px]" />
              Watch Demo
            </button>
          </motion.div>

          {/* Scroll */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="flex justify-center mt-12 sm:mt-20"
          >
            <a href="ProductShowcase">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
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
          className="relative mt-16 sm:mt-24"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 blur-3xl rounded-[40px]"></div>

          <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 font-semibold truncate">
                AI Dashboard
              </p>
              <div className="w-10 sm:w-14"></div>
            </div>

            {/* Dashboard */}
            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
              {/* LEFT */}
              <div className="lg:col-span-2">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 sm:p-6">
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                      Revenue
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black mt-1 sm:mt-2 text-slate-900 dark:text-white">
                      $128K
                    </h2>
                    <span className="text-green-500 text-xs sm:text-sm font-semibold">
                      +18.6%
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 sm:p-6">
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                      Customers
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black mt-1 sm:mt-2 text-slate-900 dark:text-white">
                      24.5K
                    </h2>
                    <span className="text-blue-600 text-xs sm:text-sm font-semibold">
                      +2.1K
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 sm:p-6">
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                      Growth
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black mt-1 sm:mt-2 text-slate-900 dark:text-white">
                      96%
                    </h2>
                    <span className="text-emerald-500 text-xs sm:text-sm font-semibold">
                      Excellent
                    </span>
                  </div>
                </div>

                {/* Graph */}
                <div className="mt-5 sm:mt-8 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 sm:p-6">
                  <h3 className="font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 text-sm sm:text-base">
                    Monthly Performance
                  </h3>

                  <div className="flex items-end justify-between h-40 sm:h-56 lg:h-64 gap-1.5 sm:gap-3">
                    {[45, 70, 55, 95, 60, 85, 50, 100].map((item, index) => (
                      <div
                        key={index}
                        className="flex-1 h-full flex items-end group"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1,
                            duration: 0.6,
                          }}
                          className="w-full rounded-t-lg sm:rounded-t-xl bg-gradient-to-t from-blue-600 via-purple-500 to-cyan-400 relative"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded">
                            {item}%
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between mt-3 sm:mt-4 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
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
              <div className="space-y-3 sm:space-y-5">
                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6">
                  <p className="text-xs sm:text-sm opacity-80">Active Users</p>
                  <h2 className="text-3xl sm:text-4xl font-black mt-1 sm:mt-2">
                    250K+
                  </h2>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm">
                    Live users connected worldwide.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 sm:p-6">
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                    Server Status
                  </p>
                  <div className="flex items-center gap-3 mt-3 sm:mt-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 animate-pulse shrink-0"></div>
                    <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                      All Systems Operational
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 sm:p-6">
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                    AI Prediction
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black mt-1 sm:mt-2 text-blue-600">
                    +42%
                  </h2>
                  <p className="text-xs sm:text-sm mt-2 text-slate-600 dark:text-slate-300">
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
          className="mt-12 sm:mt-20 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">
            Trusted by modern companies worldwide
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-10 opacity-60 text-slate-600 dark:text-slate-300 font-bold text-sm sm:text-base lg:text-lg">
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
          className="absolute top-40 left-10 hidden xl:block"
        >
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white">
            ⚡ Real-time Data
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-40 right-10 hidden xl:block"
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
