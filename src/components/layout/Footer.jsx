"use client";

import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white transition-colors duration-500 dark:bg-black">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Logo and Description */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                TIS
              </div>

              <div>
                <p className="text-sm font-bold tracking-wide">
                  TULAS INTERNATIONAL
                </p>

                <p className="text-xs tracking-widest text-slate-400">
                  SCHOOL
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Inspiring young minds through knowledge, creativity, character,
              and a global outlook.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="text-sm font-semibold">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Tulas International School.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 transition hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>

        </div>

      </div>
    </footer>
  );
}