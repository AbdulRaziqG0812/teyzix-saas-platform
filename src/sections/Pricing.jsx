import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 19,
    yearly: 190,
    desc: "Perfect for individuals starting out",
    features: [
      "Basic Analytics",
      "1 Project",
      "Email Support",
      "Community Access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 490,
    desc: "Best for growing teams",
    features: [
      "Advanced Analytics",
      "Unlimited Projects",
      "Priority Support",
      "Team Collaboration",
      "API Access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 99,
    yearly: 990,
    desc: "For large scale businesses",
    features: [
      "Custom Analytics",
      "Dedicated Manager",
      "24/7 Support",
      "Security Suite",
      "Full API Access",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="py-24 px-6 max-w-7xl mx-auto transition-colors duration-500"
    >
      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Simple Pricing
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mt-4">
          Choose the plan that fits your business
        </p>

        {/* Toggle */}

        <div className="mt-8 flex justify-center items-center gap-4">

          <span
            className={
              !isYearly
                ? "font-bold text-slate-900 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            }
          >
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
              isYearly
                ? "bg-emerald-500"
                : "bg-slate-300 dark:bg-slate-700"
            }`}
          >
            <motion.div
              animate={{ x: isYearly ? 24 : 0 }}
              className="w-5 h-5 bg-white rounded-full shadow-md"
            />
          </button>

          <span
            className={
              isYearly
                ? "font-bold text-slate-900 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            }
          >
            Yearly (Save 20%)
          </span>

        </div>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-8">

        {plans.map((plan, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`relative rounded-3xl border p-8 shadow-lg transition duration-300 ${
              plan.popular
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 scale-105"
                : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            }`}
          >

            {/* Popular Badge */}

            {plan.popular && (
              <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Plan Name */}

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {plan.name}
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mt-2">
              {plan.desc}
            </p>

            {/* Price */}

            <div className="mt-6 text-4xl font-black text-slate-900 dark:text-white">

              ${isYearly ? plan.yearly : plan.monthly}

              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                /{isYearly ? "yr" : "mo"}
              </span>

            </div>

            {/* Features */}

            <ul className="mt-6 space-y-3">

              {plan.features.map((f, i) => (

                <li
                  key={i}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                >
                  <Check className="text-emerald-500 w-5 h-5" />
                  {f}
                </li>

              ))}

            </ul>

            {/* Button */}

            <button
              className={`w-full mt-8 py-3 rounded-xl font-bold transition ${
                plan.popular
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-700 dark:hover:bg-slate-600"
              }`}
            >
              Get Started
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Pricing;