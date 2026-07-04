import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "How AI is Transforming SaaS Platforms",
    category: "AI",
    desc: "Explore how artificial intelligence is reshaping modern SaaS products.",
    date: "Jan 12, 2026",
    read: "5 min read",
  },
  {
    title: "React Performance Optimization Guide",
    category: "Development",
    desc: "Learn advanced techniques to optimize React applications at scale.",
    date: "Jan 08, 2026",
    read: "8 min read",
  },
  {
    title: "Modern UI/UX Trends in 2026",
    category: "Design",
    desc: "Discover the latest design trends used in top tech companies.",
    date: "Jan 02, 2026",
    read: "6 min read",
  },
];

const BlogPreview = () => {
  return (
    <section
      className="
      relative py-28 overflow-hidden
      bg-gradient-to-br
      from-slate-50 via-white to-blue-50
      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-950
      transition-colors duration-500"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-5 py-2 font-semibold mb-6">
            Latest Blog
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Latest Insights &
            <span className="block bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Learn modern SaaS development, AI trends and UI/UX best practices from our latest articles.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10"></div>

              {/* Top Gradient */}

              <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600"></div>

              <div className="relative p-8">

                {/* Category */}

                <span className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-4 py-2">
                  {blog.category}
                </span>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-black text-slate-900 dark:text-white leading-snug">
                  {blog.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                  {blog.desc}
                </p>

                {/* Meta */}

                <div className="flex items-center justify-between mt-8 text-sm text-slate-500 dark:text-slate-400">

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {blog.read}
                  </div>

                </div>

                {/* Divider */}

                <div className="my-6 border-t border-slate-200 dark:border-slate-700"></div>

                {/* Button */}

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 group"
                >
                  Read Full Article

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition"
                  />
                </motion.button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BlogPreview;