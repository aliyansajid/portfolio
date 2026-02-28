"use client";

import { motion } from "framer-motion";
import { Terminal, MessageSquare, User, ShieldCheck } from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Mercer",
      role: "Lead Architect @ Nexus Systems",
      content:
        "The system architecture delivered was flawless. Aliyan understands high-performance scaling in a way few developers do. The deployment was seamless and the performance gains were immediate.",
      clearance: "LEVEL_5_VERIFIED",
    },
    {
      name: "Sarah Chen",
      role: "CTO @ Cybertronix",
      content:
        "Aliyan's attention to detail and ability to implement complex UI animations while maintaining system stability is unmatched. The final product exceeded all our operational parameters.",
      clearance: "LEVEL_4_RESTRICTED",
    },
    {
      name: "Marcus Thorne",
      role: "VP Engineering @ Void Corp",
      content:
        "We needed a robust, highly optimized backend to handle our massive data influx. Aliyan not only delivered on specs but optimized our existing infrastructure by 40%. A true technical operative.",
      clearance: "LEVEL_5_VERIFIED",
    },
  ];

  return (
    <section
      className="py-32 relative bg-[#020617] border-t border-slate-800"
      id="testimonials"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex justify-center items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
            <Terminal size={12} className="text-violet-500" />{" "}
            SYSTEM.ENDORSEMENTS
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <ScrambleText text="Client" duration={1000} delay={200} />{" "}
            <span className="text-violet-500">
              <ScrambleText text="Logs." duration={1400} delay={600} />
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-mono max-w-2xl mx-auto uppercase tracking-widest">
            {">"} Verified data streams from allied operatives and command
            nodes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group bg-[#060c21] p-8 border border-slate-800 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cyberpunk Accent Lines */}
              <div className="absolute top-0 left-0 w-2 h-full bg-violet-600/20 group-hover:bg-violet-500 transition-colors duration-300"></div>
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>

              {/* Content */}
              <div className="relative z-10 mb-8">
                <MessageSquare
                  className="text-violet-500/50 mb-6 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                  size={32}
                />
                <p className="text-slate-300 leading-relaxed font-mono text-sm">
                  " {testimonial.content} "
                </p>
              </div>

              {/* User Info */}
              <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                    <User className="text-violet-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-mono text-violet-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Clearance Badge */}
              <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 px-2 py-1 bg-violet-500/10 border border-violet-500/30">
                <ShieldCheck size={12} className="text-violet-400" />
                <span className="text-[10px] font-mono tracking-widest text-violet-400 uppercase">
                  {testimonial.clearance}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
