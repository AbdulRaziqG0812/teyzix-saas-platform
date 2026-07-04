import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ dark, setDark }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent cursor-pointer"
        >
          TEYZIX
        </motion.a>

        {/* Navigation */}
        <div className="hidden md:flex gap-10 font-medium text-slate-600 dark:text-slate-300">

          <a
            href="#features"
            className="relative group hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all"></span>
          </a>

          <a
            href="#pricing"
            className="relative group hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all"></span>
          </a>

          <a
            href="#testimonials"
            className="relative group hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Testimonials
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all"></span>
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition"
          >
            {dark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 dark:text-white" />
            )}
          </motion.button>

          {/* CTA */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg hover:shadow-emerald-500/30 transition"
          >
            Get Started
          </motion.a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;