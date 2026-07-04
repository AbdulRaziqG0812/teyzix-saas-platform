import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-black text-emerald-400">
              TEYZIX
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              Build smarter businesses using AI-powered analytics,
              automation, cloud collaboration and enterprise security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#hero" className="hover:text-emerald-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-emerald-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-emerald-400">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-emerald-400">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#">Documentation</a>
              </li>

              <li>
                <a href="#">API</a>
              </li>

              <li>
                <a href="#">Support</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@teyzix.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +92 300 1234567
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Pakistan
              </div>

            </div>

          </div>

        </div>

        {/* Newsletter */}

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-16 bg-slate-800 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >

          <div>

            <h3 className="text-2xl font-bold">
              Subscribe to our Newsletter
            </h3>

            <p className="text-slate-400 mt-2">
              Receive updates, product news and exclusive offers.
            </p>

          </div>

          <div className="flex w-full lg:w-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-l-xl bg-slate-700 text-white outline-none w-full lg:w-72"
            />

            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 rounded-r-xl flex items-center gap-2 font-semibold">
              Subscribe
              <ArrowRight size={18} />
            </button>

          </div>

        </motion.div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500">
            © 2026 TEYZIX. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-400">

            <a href="#" className="hover:text-emerald-400">
              Terms
            </a>

            <a href="#" className="hover:text-emerald-400">
              Privacy
            </a>

            <a href="#" className="hover:text-emerald-400">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;