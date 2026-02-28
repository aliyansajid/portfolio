"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function Education() {
  const education = [
    {
      type: "education",
      title: "BS Computer Science",
      company: "COMSATS University Islamabad",
      location: "Wah Cantt, Pakistan",
      date: "February 2022 - February 2026",
      bullets: [
        "Relevant Coursework: Data Structure and Algorithm, Operating Systems, Database Systems, Linear Algebra, Discrete Mathematics and Calculus.",
      ],
    },
  ];

  return (
    <section
      className="py-32 relative border-t border-slate-800 bg-[#020617]"
      id="education"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column (Sticky Sidebar) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
                <Terminal size={12} className="text-blue-500" />{" "}
                SYSTEM.LOG.EDUCATION
              </div>

              <h2
                className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
              >
                <ScrambleText text="Academic" duration={1200} delay={400} />{" "}
                <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400">
                  <ScrambleText
                    text="Calibrations."
                    duration={1500}
                    delay={800}
                  />
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 block font-mono leading-relaxed">
                {">"} Trace logs of academic records and core computational
                theory training.
              </p>

              <div className="hidden lg:flex items-center gap-4 text-slate-500">
                <ArrowRight size={20} className="text-emerald-500" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/50">
                  Awaiting Input / Scroll down
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Scrollable Cards) */}
          <div className="w-full lg:w-2/3 space-y-12">
            {education.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#060c21] p-8 md:p-10 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300"
              >
                {/* Cyberpunk accent lines */}
                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600/20 group-hover:bg-emerald-500 transition-colors duration-300"></div>
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pl-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2 bg-slate-900 border border-slate-700 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <Cpu size={20} />
                      </span>
                      <h3 className="text-2xl font-bold text-slate-100 tracking-tight uppercase">
                        {exp.title}
                      </h3>
                    </div>
                    <h4 className="text-md font-mono text-emerald-400 ml-12">
                      @{exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-2 md:items-end text-xs font-mono text-slate-500 ml-12 md:ml-0 border-l px-4 md:border-l-0 border-slate-800 md:pl-0">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-slate-400" />{" "}
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-slate-400" />{" "}
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 relative z-10 pl-4 ml-12 border-l border-slate-800/50">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed"
                    >
                      <span className="mt-2 block w-2 h-[2px] bg-emerald-500/50 shrink-0 group-hover:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
