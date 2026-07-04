import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Send,
  User,
  MessageSquare,
  Clock,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("success");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  return (
    <section
      className="
      relative overflow-hidden
      py-28
      bg-gradient-to-br
      from-slate-50
      via-white
      to-blue-50
      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-950
      transition-colors duration-500"
    >

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-emerald-500/20 blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-semibold">

            Contact Us

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 dark:text-white">

            Let's Build Something

            <span className="block bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">

              Amazing Together

            </span>

          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">

            We'd love to hear about your project.
            Send us a message and our team will respond as soon as possible.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT FORM */}

          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            onSubmit={handleSubmit}
            className="rounded-[32px]
            bg-white/80
            dark:bg-slate-900/80
            backdrop-blur-xl
            border
            border-slate-200
            dark:border-slate-700
            shadow-2xl
            p-8"
          >

            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8">

              Send Message

            </h3>

            {/* Name */}

            <div className="relative mb-6">

              <User className="absolute left-4 top-4 text-slate-400" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />

            </div>

            {/* Email */}

            <div className="relative mb-6">

              <Mail className="absolute left-4 top-4 text-slate-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />

            </div>

            {/* Message */}

            <div className="relative">

              <MessageSquare className="absolute left-4 top-4 text-slate-400" />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none"
              />

            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: .98 }}
              type="submit"
              className="mt-8 w-full flex justify-center items-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold shadow-xl"
            >

              <Send size={18} />

              Send Message

            </motion.button>

            {status === "success" && (

              <div className="mt-6 flex items-center gap-2 text-green-500 font-semibold">

                <CheckCircle size={18} />

                Message sent successfully.

              </div>

            )}

            {status === "error" && (

              <div className="mt-6 flex items-center gap-2 text-red-500 font-semibold">

                <AlertCircle size={18} />

                Please fill all required fields.

              </div>

            )}

          </motion.form>

          {/* RIGHT SIDE */}

                    <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* Contact Card */}

            <div className="rounded-[32px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-2xl p-8">

              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8">

                Contact Information

              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">

                    <Mail className="text-emerald-600 dark:text-emerald-400" />

                  </div>

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Email
                    </p>

                    <h4 className="font-bold text-slate-900 dark:text-white">
                      support@teyzix.com
                    </h4>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">

                    <Phone className="text-blue-600 dark:text-blue-400" />

                  </div>

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Phone
                    </p>

                    <h4 className="font-bold text-slate-900 dark:text-white">
                      +92 300 1234567
                    </h4>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">

                    <MapPin className="text-purple-600 dark:text-purple-400" />

                  </div>

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Office
                    </p>

                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Pakistan • Remote Office
                    </h4>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">

                    <Clock className="text-orange-600 dark:text-orange-400" />

                  </div>

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Working Hours
                    </p>

                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Mon - Fri | 9:00 AM - 6:00 PM
                    </h4>

                  </div>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="rounded-[32px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-2xl p-8">

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">

                Follow Us

              </h3>

              <div className="grid grid-cols-3 gap-4">

                <motion.a
                  whileHover={{ y: -6 }}
                  href="#"
                  className="rounded-2xl bg-slate-100 dark:bg-slate-800 py-5 text-center font-bold text-slate-700 dark:text-white hover:bg-blue-500 hover:text-white transition"
                >
                  Twitter
                </motion.a>

                <motion.a
                  whileHover={{ y: -6 }}
                  href="#"
                  className="rounded-2xl bg-slate-100 dark:bg-slate-800 py-5 text-center font-bold text-slate-700 dark:text-white hover:bg-blue-700 hover:text-white transition"
                >
                  LinkedIn
                </motion.a>

                <motion.a
                  whileHover={{ y: -6 }}
                  href="#"
                  className="rounded-2xl bg-slate-100 dark:bg-slate-800 py-5 text-center font-bold text-slate-700 dark:text-white hover:bg-slate-900 hover:text-white transition"
                >
                  GitHub
                </motion.a>

              </div>

            </div>

            {/* Map */}

            <div className="rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Pakistan&output=embed"
                className="w-full h-[280px]"
                loading="lazy"
              ></iframe>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;