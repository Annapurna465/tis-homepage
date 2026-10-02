"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Lightbulb,
  Palette,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Academic Excellence",
    text: "A strong academic foundation that develops knowledge, reasoning, and problem-solving skills.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Innovation & Inquiry",
    text: "Students are encouraged to ask questions, explore ideas, and approach challenges creatively.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Arts & Creativity",
    text: "Creative expression helps students discover their interests and develop confidence.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Sports & Leadership",
    text: "Activities beyond academics encourage teamwork, discipline, resilience, and leadership.",
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Academics
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
              Building knowledge.
              <br />
              <span className="text-cyan-300">
                Developing possibilities.
              </span>
            </h2>

            <p className="max-w-md leading-7 text-slate-400">
              Our approach brings together strong academics and experiences
              that help students grow as thinkers, creators, and leaders.
            </p>
          </div>
        </motion.div>

        {/* Program Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-500 hover:border-cyan-300/20 hover:bg-white/[0.07]"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-300">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-semibold text-slate-600 transition group-hover:text-cyan-300">
                    {program.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-3 max-w-lg leading-7 text-slate-400">
                  {program.text}
                </p>

                {/* Learn more */}
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-500 transition group-hover:text-cyan-300">
                  Explore

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Decorative glow */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 border-t border-white/10 pt-8"
        >
          <p className="max-w-3xl text-xl font-medium leading-8 text-slate-300 sm:text-2xl">
            "Education is not just about what students learn,
            but about who they become."
          </p>
        </motion.div>

      </div>
    </section>
  );
}