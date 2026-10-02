"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageCircle,
  UserCheck,
} from "lucide-react";

const benefits = [
  "Holistic learning environment",
  "Experienced and supportive educators",
  "Academic and extracurricular opportunities",
  "Focus on confidence and character",
];

const admissionSteps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Enquire",
    text: "Connect with the admissions team and learn more about TIS.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Apply",
    text: "Complete the admission process and submit the required details.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Join TIS",
    text: "Complete the next steps and begin your child's journey.",
  },
];

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="bg-white px-6 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-cyan-300">
            Admissions
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
              Begin the journey
              <span className="text-cyan-500 dark:text-cyan-300">
                {" "}with TIS.
              </span>
            </h2>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Admissions Information
            </div>
          </div>
        </motion.div>

        {/* Main Admission Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-12 text-white shadow-2xl md:px-14 md:py-16"
        >
          {/* Background glow */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Your next chapter starts here
              </p>

              <h3 className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
                Give your child a place to learn, explore, and grow.
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Discover an environment where academics, creativity,
                collaboration, character, and confidence come together.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-100"
                >
                  Enquire About Admissions

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:+919837983791"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  Call Admissions
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">
              <p className="font-semibold">
                Why families explore TIS
              </p>

              <div className="mt-6 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />

                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Admission Process */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Simple process
            </p>

            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
              How to get started
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white transition group-hover:bg-cyan-400 group-hover:text-slate-950 dark:bg-white dark:text-slate-950">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-bold text-slate-400">
                      {step.number}
                    </span>
                  </div>

                  <h4 className="mt-7 text-xl font-bold">
                    {step.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}