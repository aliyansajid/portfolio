"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20"
      id="home"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]"></div>

      <div className="absolute top-0 inset-x-0 h-[500px] bg-linear-to-b from-blue-500/20 via-transparent to-transparent opacity-50 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[60vw] h-[60vh] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_10px_2px_#60a5fa] animate-ping"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_10px_2px_#c084fc] animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-xl text-xs font-mono tracking-widest text-blue-300 uppercase shadow-[0_0_15px_rgba(59,130,246,0.1)]"
        >
          <Terminal size={14} className="text-blue-400" />
          <span>System Online: Ready for Deployment</span>
        </motion.div>

        <div className="min-h-[160px] sm:min-h-[200px] md:min-h-[250px] flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white uppercase"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.1)" }}
          >
            Architecting &nbsp;
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] leading-tight block mt-2 md:inline md:mt-0">
              The Future.
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-mono leading-relaxed"
        >
          {">"}&nbsp; Next-generation full-stack development. Building scalable,
          high-performance web systems and intelligent user interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500 text-xs font-mono tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group/link"
          >
            Selected works
            <ArrowRight
              size={18}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="/Allyan_Resume.pdf"
            download="Allyan_Resume.pdf"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-slate-400 text-xs font-mono tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group/link"
          >
            <Download
              size={18}
              className="group-hover/btn:-translate-y-1 transition-transform"
            />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          {[
            {
              Icon: Github,
              href: "https://github.com/aliyansajid",
              name: "GitHub Profile",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/allyan-sajid/",
              name: "LinkedIn Profile",
            },
          ].map(({ Icon, href, name }, i) => (
            <a
              key={i}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 p-3 rounded-full border border-transparent hover:border-blue-500/30 bg-slate-900/50"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-[#020617] to-transparent pointer-events-none"></div>
    </section>
  );
}
