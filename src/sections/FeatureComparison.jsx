import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";

const features = [
  {
    title: "AI Analytics",
    free: true,
    pro: true,
    enterprise: true,
  },
  {
    title: "Team Collaboration",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    title: "Cloud Storage",
    free: "5GB",
    pro: "100GB",
    enterprise: "Unlimited",
  },
  {
    title: "Priority Support",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    title: "Advanced Security",
    free: false,
    pro: false,
    enterprise: true,
  },
];

const FeatureComparison = () => {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="features"
      className="py-24 px-6 max-w-7xl mx-auto transition-colors duration-500"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Feature Comparison
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mt-4">
          Compare plans and choose what fits your business
        </p>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-xl transition-colors duration-500">

        {/* Header */}
        <div className="grid grid-cols-4 bg-slate-50 dark:bg-slate-800 p-5 font-bold text-slate-700 dark:text-white">
          <div>Features</div>
          <div className="text-center">Free</div>
          <div className="text-center">Pro</div>
          <div className="text-center">Enterprise</div>
        </div>

        {/* Rows */}
        {features.map((item, index) => (
          <div
            key={index}
            className="border-t border-slate-100 dark:border-slate-700"
          >
            {/* Clickable Row */}
            <div
              onClick={() => setOpen(open === index ? null : index)}
              className="grid grid-cols-4 p-5 items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              {/* Feature */}
              <div className="font-medium flex items-center gap-2 text-slate-800 dark:text-white">
                {item.title}

                <ChevronDown
                  className={`w-4 h-4 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Free */}
              <div className="text-center">
                {item.free === true ? (
                  <Check className="text-emerald-500 mx-auto" />
                ) : item.free === false ? (
                  <X className="text-red-500 mx-auto" />
                ) : (
                  <span className="text-slate-600 dark:text-slate-300">
                    {item.free}
                  </span>
                )}
              </div>

              {/* Pro */}
              <div className="text-center">
                {item.pro === true ? (
                  <Check className="text-emerald-500 mx-auto" />
                ) : item.pro === false ? (
                  <X className="text-red-500 mx-auto" />
                ) : (
                  <span className="text-slate-600 dark:text-slate-300">
                    {item.pro}
                  </span>
                )}
              </div>

              {/* Enterprise */}
              <div className="text-center">
                {item.enterprise === true ? (
                  <Check className="text-emerald-500 mx-auto" />
                ) : item.enterprise === false ? (
                  <X className="text-red-500 mx-auto" />
                ) : (
                  <span className="text-slate-600 dark:text-slate-300">
                    {item.enterprise}
                  </span>
                )}
              </div>
            </div>

            {/* Expandable */}
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800"
              >
                This feature is available based on your selected plan.
                Upgrade for full access and advanced capabilities.
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureComparison;