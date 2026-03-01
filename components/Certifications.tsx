"use client";

import { motion } from "framer-motion";
import { Terminal, Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      url: "https://www.udemy.com/certificate/UC-764e4747-4f5e-42d3-85b0-b9b35d9a2f24/",
      color: "from-blue-600/30 to-blue-900/10",
      accent: "border-blue-500",
      iconColor: "text-blue-400",
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      url: "https://coursera.org/share/4fdf19dd690f2a439a1d1ecdfded3497",
      color: "from-purple-600/30 to-purple-900/10",
      accent: "border-purple-500",
      iconColor: "text-purple-400",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google",
      url: "https://coursera.org/share/398ecaa7b93ad0227d96fd26a3d4b0a6",
      color: "from-emerald-600/30 to-emerald-900/10",
      accent: "border-emerald-500",
      iconColor: "text-emerald-400",
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      url: "https://coursera.org/share/b41ce2713246487dd2f0ed666dc00a8f",
      color: "from-cyan-600/30 to-cyan-900/10",
      accent: "border-cyan-500",
      iconColor: "text-cyan-400",
    },
  ];

  return (
    <section
      className="py-24 relative bg-[#020617] border-t border-slate-800"
      id="certifications"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex justify-center items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
            <Terminal size={12} className="text-blue-500" />
            SYSTEM.CREDENTIALS
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            Verified &nbsp;
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
              Certifications.
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-mono max-w-2xl mx-auto uppercase tracking-widest">
            {">"} Completed training modules and verified industry skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group bg-[#060c21] p-8 border border-slate-800 transition-all duration-300 flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden h-full min-h-[220px]`}
            >
              <div
                className={`absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600 opacity-30 z-20 pointer-events-none group-hover:opacity-100 group-hover:border-t-2 group-hover:border-r-2 transition-all duration-300 group-hover:${cert.accent}`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600 opacity-30 z-20 pointer-events-none group-hover:opacity-100 group-hover:border-b-2 group-hover:border-l-2 transition-all duration-300 group-hover:${cert.accent}`}
              ></div>

              <div
                className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              ></div>

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>

              <div className="relative z-10 flex-col flex justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                      <Award className={cert.iconColor} size={24} />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 bg-slate-900 border border-slate-800 text-slate-300 uppercase shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 uppercase tracking-tight leading-tight mb-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
