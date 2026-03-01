"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
        isScrolled
          ? "top-6 bg-[#060c21]/90 backdrop-blur-md border border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.8)] py-4"
          : "top-8 bg-transparent border border-transparent py-4"
      }`}
    >
      {isScrolled && (
        <>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 opacity-80"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>
        </>
      )}

      <div className="relative z-10 w-full px-6 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-tighter text-white uppercase"
        >
          <Terminal size={24} className="text-blue-500" />
          <span>
            AS<span className="text-blue-500">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-blue-400 transition-colors"
            >
              [{link.name}]
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-blue-600/10 uppercase hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500 text-xs font-mono tracking-widest transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[calc(100%+1rem)] left-0 right-0 bg-[#060c21]/95 backdrop-blur-xl border border-slate-700 shadow-[0_0_40px_rgba(0,0,0,0.9)] p-6 z-40"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600/20"></div>
          <div className="flex flex-col space-y-6 relative z-10 pl-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-mono tracking-widest uppercase text-slate-300 hover:text-blue-400 border-b border-slate-800 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {">"} {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-6 py-3 bg-blue-600/10 uppercase hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500 text-center text-xs font-mono tracking-widest transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
