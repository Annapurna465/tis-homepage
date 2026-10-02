"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
          >
            <Sparkles size={15} />
            Inspiring the next generation
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Where curious minds become{" "}
            <span className="text-cyan-300">global leaders.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            At Tulas International School, we create meaningful learning
            experiences that help students discover their potential,
            build confidence, and shape a brighter future.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-100"
            >
              Explore Admissions

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
            >
              Discover TIS
            </a>
          </div>

          {/* Small Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold">01</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                Learning
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">02</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                Creativity
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">03</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                Character
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Main Card */}
          <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-white/[0.03] shadow-2xl">

            {/* Inner Circle */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/5" />

            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm" />

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-2xl font-bold text-slate-950 shadow-2xl">
                  TIS
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  Learn • Lead • Inspire
                </p>
              </motion.div>
            </div>

            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-8 top-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl"
            >
              <BookOpen size={23} className="text-cyan-200" />
            </motion.div>

            {/* Floating Text */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 right-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-400">Our vision</p>

              <p className="mt-1 font-semibold">
                Think beyond limits.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-white sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={17} />
      </motion.a>
    </section>
  );
}