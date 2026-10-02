"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Heart, Globe } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Purposeful Learning",
    text: "Learning experiences designed to encourage curiosity, understanding, and independent thinking.",
  },
  {
    icon: Heart,
    title: "Strong Character",
    text: "We nurture confidence, empathy, responsibility, and respect alongside academic growth.",
  },
  {
    icon: Globe,
    title: "Global Outlook",
    text: "Students are encouraged to explore ideas, cultures, and opportunities beyond the classroom.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-cyan-300">
              About TIS
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-bold leading-tight sm:text-5xl">
              Education that goes beyond the classroom.
            </h2>

            <a
              href="#academics"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-slate-900 transition hover:gap-3 dark:text-white"
            >
              Explore our approach
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Tulas International School is built around the belief that
              education should help young people understand the world and
              discover their place in it.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Through a balance of academics, creativity, collaboration, and
              character development, students are encouraged to become
              confident lifelong learners.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}