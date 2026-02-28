"use client";

import { motion } from "framer-motion";
import { Coffee, Code, Globe2, Sparkles, Terminal } from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function About() {
  const stats = [
    {
      value: "4+",
      label: "Years Experience",
      icon: Coffee,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      value: "10+",
      label: "Projects Completed",
      icon: Code,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      value: "5+",
      label: "Worldwide Clients",
      icon: Globe2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: Sparkles,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <section className="py-24 relative bg-[#020617]" id="about">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-white/[0.05] bg-[length:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex justify-center items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
            <Terminal size={12} className="text-blue-500" /> SYSTEM.WHOAMI
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <ScrambleText text="Discover" duration={1000} delay={200} />{" "}
            <span className="text-blue-500">
              <ScrambleText text="Me." duration={1500} delay={600} />
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Profile Aesthetic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative flex justify-center"
          >
            {/* Cyberpunk profile card */}
            <div className="relative w-full max-w-sm aspect-4/5 bg-[#060c21] border border-slate-700/50 flex flex-col items-center justify-center p-8 group transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              {/* Cyberpunk accent lines */}
              <div className="absolute top-0 right-0 w-2 h-1/2 bg-blue-600/20 group-hover:bg-blue-500 transition-colors duration-300"></div>
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-32 h-32 border-2 border-dashed border-slate-700 bg-slate-900/50 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 transition-colors duration-300">
                {/* Placeholder for User Profile Image */}
                <span className="text-4xl text-slate-700 font-black font-mono tracking-tighter group-hover:text-blue-500/50 transition-colors">
                  AS
                </span>
              </div>

              <div className="text-center relative z-10 w-full">
                <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-2">
                  Allyan Sajid
                </h3>
                <p className="text-blue-400 font-mono text-sm mb-6 uppercase tracking-widest">
                  [ Full Stack Dev ]
                </p>
                <div className="flex justify-center gap-3">
                  <span className="px-4 py-1.5 bg-slate-900 text-xs font-mono text-slate-400 border border-slate-800">
                    CHK:PK
                  </span>
                  <span className="px-4 py-1.5 bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 animate-ping shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          </motion.div>

          {/* Right Side: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <h3
              className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6"
              style={{ textShadow: "0 0 15px rgba(255,255,255,0.1)" }}
            >
              INITIATING{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                DIGITAL SOLUTIONS
              </span>
            </h3>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10 font-mono text-sm md:text-base">
              <p>
                {">"} Hello! I'm Allyan Sajid, a passionate full-stack developer
                who loves building digital solutions that make an impact. My
                journey in web development started back in 2018, and since then,
                I've had the privilege of working on diverse projects ranging
                from simple landing pages to complex enterprise applications.
              </p>
              <p>
                {">"} Currently, I am heavily focused on building blazing-fast,
                scalable frontend applications with Next.js and robust backends
                powered by Node.js and Python. I thrive in environments where I
                can blend elegant UI/UX design with complex technical
                architecture.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#060c21] p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-4 hover:border-blue-500/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  <div
                    className={`w-10 h-10 ${stat.bg} border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className={stat.color} size={18} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-1 tracking-tight">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
