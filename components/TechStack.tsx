"use client";

import { motion } from "framer-motion";
import {
  Server,
  TabletSmartphone,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  Terminal,
} from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      icon: TabletSmartphone,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
      color: "text-blue-400",
      bg: "bg-[#060c21]",
      border: "group-hover:border-blue-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "RESTful APIs",
        "Microservices",
      ],
      color: "text-purple-400",
      bg: "bg-[#060c21]",
      border: "group-hover:border-purple-500",
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "React Native", "Swift"],
      color: "text-indigo-400",
      bg: "bg-[#060c21]",
      border: "group-hover:border-indigo-500",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Supabase", "Flutter"],
      color: "text-emerald-400",
      bg: "bg-[#060c21]",
      border: "group-hover:border-emerald-500",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
      color: "text-amber-400",
      bg: "bg-[#060c21]",
      border: "group-hover:border-amber-500",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "Postman", "Turborepo", "Claude", "Cursor"],
      color: "text-pink-400",
      bg: "bg-[#060c21]",
      border: "group-hover:border-pink-500",
    },
  ];

  return (
    <section
      className="py-24 relative bg-[#020617] border-t border-slate-800"
      id="skills"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-white/[0.05] bg-size-[20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex justify-center items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
            <Terminal size={12} className="text-blue-500" /> SYSTEM.RESOURCES
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <ScrambleText text="Tech" duration={800} delay={400} />{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
              <ScrambleText text="Stack." duration={1400} delay={600} />
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-mono max-w-2xl mx-auto uppercase tracking-widest">
            {">"} Loaded toolkits and frameworks ready for deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-[#060c21] p-8 transition-all duration-300 group border border-slate-800 ${category.border} overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
            >
              {/* Corner Accents */}
              <div
                className={`absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600 opacity-30 z-20 pointer-events-none group-hover:opacity-100 group-hover:border-t-2 group-hover:border-r-2 ${category.border} transition-all duration-300`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600 opacity-30 z-20 pointer-events-none group-hover:opacity-100 group-hover:border-b-2 group-hover:border-l-2 ${category.border} transition-all duration-300`}
              ></div>

              {/* Subtle background gradient based on Execution History cards */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>

              <div className="relative z-20 flex items-center gap-4 mb-8">
                <div
                  className={`w-14 h-14 border border-slate-700 ${category.bg} flex items-center justify-center relative ${category.color}`}
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-black text-white tracking-widest uppercase">
                  {category.title}
                </h3>
              </div>

              <div className="relative z-20 flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] group-hover:border-slate-600 transition-colors group-hover:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
