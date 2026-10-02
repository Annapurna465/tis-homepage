"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-lg dark:border-slate-700/50 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white dark:bg-white dark:text-slate-950">
            TIS
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-slate-900 dark:text-white">
              TULAS INTERNATIONAL
            </p>

            <p className="text-xs tracking-widest text-slate-500 dark:text-slate-400">
              SCHOOL
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Apply Button */}
          <a
            href="#admissions"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Apply Now
          </a>

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-900 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-slate-700 dark:bg-slate-950 md:hidden">

          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
            >
              Apply Now
            </a>

          </div>

        </div>
      )}

    </header>
  );
}