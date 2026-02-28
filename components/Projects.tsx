"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function Projects() {
  const projects = [
    {
      title: "RotorSync",
      desc: "Real-time fleet management system that handles 3,000+ pins, 5,000+ fields, and approximately 2,400 messages per minute across 40 devices.",
      tags: ["Next.js", "Swift iOS", "PostgreSQL", "MQTT", "Docker"],
      github: "#",
      demo: "#",
      color: "from-blue-600/30 to-blue-900/10",
      accent: "border-blue-500",
    },
    {
      title: "AutoVendo",
      desc: "Full stack car listing platform specifically tailored for the European market. Implements dynamic forms and high-performance search capabilities.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      github: "https://github.com/aliyansajid/autovendo",
      demo: "https://www.autovendo.ch/",
      color: "from-cyan-600/30 to-cyan-900/10",
      accent: "border-cyan-500",
    },
    {
      title: "AIForge",
      desc: "Final year project that streamlines machine learning deployment, allowing users to deploy machine learning models as APIs on GCP with a single click.",
      tags: ["Python", "GCP", "Machine Learning", "Microservices"],
      github: "https://github.com/aliyansajid/aiforge",
      demo: "https://youtu.be/KJBq07PWnJ8",
      color: "from-emerald-600/30 to-emerald-900/10",
      accent: "border-emerald-500",
    },
  ];

  return (
    <section
      className="py-24 relative bg-[#020617] border-t border-slate-800"
      id="projects"
    >
      {/* Background Grid */}
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
            <Terminal size={12} className="text-blue-500" /> SYSTEM.ARCHIVES
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <ScrambleText text="Selected" duration={1000} delay={400} />{" "}
            <span className="text-blue-500">
              <ScrambleText text="Works." duration={1400} delay={600} />
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-mono max-w-2xl mx-auto">
            {">"} A catalog of recently compiled applications. Featuring
            scalable systems and modern interfaces deployed to production.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 relative pb-[10vh]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              style={{
                top: `calc(15vh + ${index * 40}px)`,
              }}
              className="sticky z-10 w-full max-w-5xl mx-auto group bg-[#060c21] h-[500px] flex flex-col justify-end border border-slate-800 hover:border-slate-600 transition-colors duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-500 opacity-50 z-20 pointer-events-none group-hover:border-blue-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-500 opacity-50 z-20 pointer-events-none group-hover:border-blue-400 transition-colors"></div>

              {/* Background gradient map placeholder */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`}
              ></div>

              {/* Holographic Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none z-10"></div>

              {/* Dynamic glowing border effect at the top */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-${project.accent.replace("border-", "")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}
              ></div>

              <div className="relative z-30 p-10 md:p-14 bg-linear-to-t from-[#020617] via-[#020617]/90 to-transparent pt-32">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono tracking-widest px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 uppercase shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:border-blue-500/30 transition-colors"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>

                <div className="max-w-3xl">
                  <h3
                    className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase"
                    style={{ textShadow: "0 0 20px rgba(0,0,0,1)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-base font-mono leading-relaxed mb-8 opacity-80 md:opacity-50 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-2xl bg-slate-900/50 p-4 border-l-2 border-blue-500/50 backdrop-blur-sm">
                    {project.desc}
                  </p>

                  <div className="flex items-center gap-6 md:opacity-50 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a
                      href={project.github}
                      target={project.github !== "#" ? "_blank" : undefined}
                      rel={
                        project.github !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-slate-300 hover:text-blue-400 transition-colors bg-slate-800/50 px-4 py-2 border border-slate-700 hover:border-blue-500/50"
                    >
                      <Github size={16} /> REPOSITORY //
                    </a>
                    <a
                      href={project.demo}
                      target={project.demo !== "#" ? "_blank" : undefined}
                      rel={
                        project.demo !== "#" ? "noopener noreferrer" : undefined
                      }
                      className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-slate-300 hover:text-blue-400 transition-colors bg-slate-800/50 px-4 py-2 border border-slate-700 hover:border-blue-500/50"
                    >
                      <ExternalLink size={16} /> INITIALIZE //
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
