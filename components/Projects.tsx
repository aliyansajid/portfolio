"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "The Educators",
      desc: "A comprehensive Learning Management System (LMS) designed for educational institutions to manage courses, students, and administration.",
      tags: ["Next.js", "React", "Turborepo", "Zod"],
      github: "https://github.com/aliyansajid/the-educators",
      demo: "https://the-educators-client.vercel.app/",
      color: "from-violet-600/30 to-violet-900/10",
      accent: "border-violet-500",
    },
    {
      title: "RotorSync",
      desc: "Real-time fleet management system that handles 3,000+ pins, 5,000+ fields, and approximately 2,400 messages per minute across 40 devices.",
      tags: ["Next.js", "Swift", "PostgreSQL", "MQTT"],
      github: "#",
      demo: "#",
      color: "from-blue-600/30 to-blue-900/10",
      accent: "border-blue-500",
    },
    {
      title: "AutoVendo",
      desc: "Full stack car listing platform specifically tailored for the European market. Implements dynamic forms and high-performance search capabilities.",
      tags: ["Next.js", "Golang", "AWS", "PostgreSQL"],
      github: "https://github.com/aliyansajid/autovendo",
      demo: "https://www.autovendo.ch/",
      color: "from-cyan-600/30 to-cyan-900/10",
      accent: "border-cyan-500",
    },
    {
      title: "AIForge",
      desc: "Final year project that streamlines machine learning deployment, allowing users to deploy machine learning models as APIs on GCP with a single click.",
      tags: ["Next.js", "Python", "GCP", "Microservices"],
      github: "https://github.com/aliyansajid/aiforge",
      demo: "https://youtu.be/KJBq07PWnJ8",
      color: "from-emerald-600/30 to-emerald-900/10",
      accent: "border-emerald-500",
    },
    {
      title: "Real Estate App",
      desc: "Semester project property listing platform where users can place properties (houses, farms, penthouses, upper/lower) for rent, buy, or lease.",
      tags: ["Laravel", "SQL", "HTML", "CSS"],
      github: "https://github.com/aliyansajid/real-estate-app",
      demo: "#",
      color: "from-rose-600/30 to-rose-900/10",
      accent: "border-rose-500",
    },
    {
      title: "Munch Vending",
      desc: "A complete website for a premier San Francisco Bay Area vending provider, showcasing traditional, micro-market, and touchless vending solutions.",
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      github: "#",
      demo: "https://munchvending.com/",
      color: "from-amber-600/30 to-amber-900/10",
      accent: "border-amber-500",
    },
    {
      title: "Sydney Hydraulic",
      desc: "A business portal for a family-owned Sydney hydraulic centre with 40+ years experience, offering top-class repair and re-manufacturing services.",
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      github: "https://github.com/aliyansajid/sydney-hydraulic",
      demo: "https://sydneyhydraulic.com.au/",
      color: "from-orange-600/30 to-orange-900/10",
      accent: "border-orange-500",
    },
  ];

  return (
    <section
      className="py-24 relative bg-[#020617] border-t border-slate-800"
      id="projects"
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
            SYSTEM.ARCHIVES
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            Selected &nbsp;
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
              Works.
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-mono max-w-2xl mx-auto">
            {">"} A catalog of recently compiled applications. Featuring
            scalable systems and modern interfaces deployed to production.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 relative">
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
              className="sticky z-10 w-full max-w-5xl mx-auto group bg-[#060c21] border border-slate-800 h-auto min-h-[500px] flex flex-col justify-end transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600 opacity-30 z-20 pointer-events-none group-hover:opacity-100 group-hover:border-t-2 group-hover:border-r-2 transition-all duration-300 group-hover:${project.accent}`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600 opacity-30 z-20 pointer-events-none group-hover:opacity-100 group-hover:border-b-2 group-hover:border-l-2 transition-all duration-300 group-hover:${project.accent}`}
              ></div>

              <div
                className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`}
              ></div>

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>

              <div
                className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-${project.accent.replace("border-", "")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}
              ></div>

              <div className="relative z-30 p-8 sm:p-10 md:p-14 bg-linear-to-t from-[#020617] via-[#020617]/90 to-transparent pt-24 md:pt-32">
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

                  <div className="flex flex-col sm:flex-row items-center gap-6 md:opacity-50 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a
                      href={project.github}
                      target={project.github !== "#" ? "_blank" : undefined}
                      rel={
                        project.github !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-2 px-6 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500 text-xs font-mono tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      <Github size={16} /> REPOSITORY //
                    </a>
                    <a
                      href={project.demo}
                      target={project.demo !== "#" ? "_blank" : undefined}
                      rel={
                        project.demo !== "#" ? "noopener noreferrer" : undefined
                      }
                      className="flex items-center gap-2 px-6 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500 text-xs font-mono tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      <ExternalLink size={16} /> LIVE DEMO //
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
