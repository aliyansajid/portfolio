"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, MapPin, CalendarDays } from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Headings Helicopter",
      location: "Remote",
      date: "January 2025 - Present",
      bullets: [
        "Built the Rotorsync iOS fleet app, implementing real-time tracking for 50 devices and optimizing map performance to efficiently render 3,000+ pins and 5,000+ dynamic data fields with smooth updates.",
        "Developed a scalable frontend using Next.js (web) and Swift (iOS), ensuring high performance rendering of data heavy dashboards.",
        "Improved database performance by tuning PostgreSQL for large historical datasets, significantly accelerating query execution and enhancing reliability.",
        "Implemented real-time communication using MQTT, enabling instant device updates and low-latency notifications.",
        "Automated CI/CD pipelines with GitHub Actions and containerized deployments using Docker, achieving consistent builds and zero downtime releases.",
      ],
    },
    {
      type: "work",
      title: "WordPress Developer",
      company: "RedFort Technologies",
      location: "Wah Cantt, Pakistan",
      date: "July 2025 - October 2025",
      bullets: [
        "Developed 5 client websites by implementing responsive design and custom WordPress solutions, leading to successful project delivery and client satisfaction.",
        "Improved website performance by implementing caching and plugin optimization, leading to a 93% PageSpeed score.",
        "Boosted SEO performance by implementing image optimization, alt tags, and keyword-focused content, leading to higher search visibility.",
      ],
    },
  ];

  return (
    <section
      className="py-24 relative border-t border-slate-800 bg-[#020617]"
      id="experience"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex justify-center items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
                <Terminal size={12} className="text-blue-500" />
                SYSTEM.LOG.EXPERIENCE
              </div>

              <h2
                className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
              >
                <ScrambleText text="Work" duration={1200} delay={400} />
                &nbsp;
                <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                  <ScrambleText
                    text="Experience."
                    duration={1500}
                    delay={800}
                  />
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-0 md:mb-10 block font-mono leading-relaxed">
                {">"} Trace logs of previous deployments and academic
                calibrations.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-24 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  top: `calc(15vh + ${index * 40}px)`,
                }}
                className="sticky z-10 group bg-[#060c21] border border-slate-800 p-8 md:p-10 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600/20 group-hover:bg-blue-500 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-blue-500 group-hover:border-t-2 group-hover:border-r-2 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-blue-500 group-hover:border-b-2 group-hover:border-l-2 group-hover:opacity-100 transition-all duration-300"></div>

                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pl-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2 bg-slate-900 border border-slate-700 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                        {exp.type === "work" ? (
                          <Terminal size={20} />
                        ) : (
                          <Cpu size={20} />
                        )}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-100 tracking-tight uppercase">
                        {exp.title}
                      </h3>
                    </div>
                    <h4 className="text-md font-mono text-blue-400 ml-12">
                      @{exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-2 md:items-end text-xs font-mono text-slate-500 ml-12 md:ml-0 border-l px-4 md:border-l-0 border-slate-800 md:pl-0">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-slate-400" />
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-slate-400" />
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
                      <span className="mt-2 block w-2 h-[2px] bg-blue-500/50 shrink-0 group-hover:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
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
