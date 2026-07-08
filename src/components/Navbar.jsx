import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-screen max-w-full overflow-x-clip bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-3 sm:px-6 sm:py-4 md:flex md:justify-between md:gap-4">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="min-w-0 truncate text-lg font-black bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent cursor-pointer sm:text-2xl md:shrink-0"
        >
          TEYZIX
        </motion.a>

        {/* Navigation (desktop) */}
        <div className="hidden md:flex gap-6 lg:gap-10 font-medium text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative group hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all"></span>
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3 md:gap-4">
          {/* Dark Mode */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition shrink-0"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 dark:text-white" />
            )}
          </motion.button>

          {/* CTA (hidden on mobile) */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block px-5 lg:px-6 py-2 rounded-full font-bold text-sm lg:text-base text-white bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg hover:shadow-emerald-500/30 transition whitespace-nowrap"
          >
            Get Started
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-5 h-5 text-slate-700 dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-4 font-medium text-slate-700 dark:text-slate-200">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#hero"
                onClick={() => setOpen(false)}
                className="sm:hidden mt-2 text-center px-6 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
