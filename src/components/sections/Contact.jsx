"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand",
  },
  {
    icon: Phone,
    title: "Admission Helpline",
    text: "+91-9837983791",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "info@tis.edu.in",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-cyan-300">
            Contact
          </p>

          <div className="mt-4 grid gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <h2 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
                Let's start a conversation about your child's future.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Have questions about admissions, academics, or life at TIS?
                Our team would be happy to hear from you.
              </p>

              <p className="mt-6 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Tula's International School is a CBSE-affiliated boarding and
                day school located in Dehradun, Uttarakhand.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid gap-4">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:info@tis.edu.in"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-105 dark:bg-white dark:text-slate-950"
            >
              Send an Email

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="tel:+919837983791"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-white dark:border-slate-600 dark:text-white dark:hover:bg-slate-900"
            >
              <Phone size={17} />
              Call Admissions
            </a>

            <a
              href="#home"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-white dark:border-slate-600 dark:text-white dark:hover:bg-slate-900"
            >
              Back to top
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}