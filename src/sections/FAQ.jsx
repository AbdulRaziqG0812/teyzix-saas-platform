import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is this SaaS platform used for?",
    a: "It helps businesses manage analytics, teams, and workflows in one unified system.",
  },
  {
    q: "Is there a free plan available?",
    a: "Yes, we offer a free starter plan with limited features.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes, you can change your plan anytime without restrictions.",
  },
  {
    q: "Is my data secure?",
    a: "We use enterprise-grade encryption and cloud security systems.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative py-28 px-6 max-w-4xl mx-auto transition-colors duration-500">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-14">

        <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 mb-3">
          <HelpCircle size={18} />
          <span className="text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mt-4">
          Everything you need to know about the platform
        </p>

      </div>

      {/* Search Box */}
      <div className="relative mb-10">

        <Search className="absolute left-4 top-4 text-slate-400 dark:text-slate-500" />

        <input
          type="text"
          placeholder="Search your question..."
          className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 backdrop-blur-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* FAQ Items */}
      <div className="space-y-4">

        {filtered.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm overflow-hidden transition-colors duration-500"
          >

            {/* Question */}

            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >

              <span className="font-semibold text-slate-800 dark:text-white">
                {item.q}
              </span>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  open === index
                    ? "rotate-180 text-emerald-600"
                    : "text-slate-500 dark:text-slate-300"
                }`}
              />

            </button>

            {/* Answer */}

            <AnimatePresence>

              {open === index && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-5 text-slate-600 dark:text-slate-300 leading-7"
                >
                  {item.a}
                </motion.div>

              )}

            </AnimatePresence>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FAQ;