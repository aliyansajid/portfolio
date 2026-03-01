"use client";

import { motion } from "framer-motion";
import { Terminal, MessageSquare, User, ShieldCheck } from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Skoruazz",
      role: "Client @ Netherlands",
      content:
        "Allyan helped me amazing! I asked to customize the standard woocommerce review section. He did it perfect. He helped me amazing! I really recommend this guy, he's an Wordpress genius! For sure i comeback for any help in Wordpress!",
      clearance: "VERIFIED_CLIENT",
    },
    {
      name: "Lukas",
      role: "Client @ Poland",
      content:
        "Allyan did everything that I asked for. He is not afraid to search for new solutions and always tries to resolve all tasks. He works very quickly and always responds clearly and fast. I will work with him again in the future.",
      clearance: "VERIFIED_CLIENT",
    },
    {
      name: "Milad",
      role: "Client @ Australia",
      content:
        "I had a great experience working with Allyan. He is a talented freelancer who exceeded my expectations. He was able to quickly understand my needs and deliver a high-quality product on time. He was also very responsive and easy to work with. I would highly recommend him to anyone looking for help with their projects.",
      clearance: "VERIFIED_CLIENT",
    },
  ];

  return (
    <section
      className="py-24 relative bg-[#020617] border-t border-slate-800"
      id="testimonials"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex justify-center items-center gap-2 mb-6 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
            <Terminal size={12} className="text-purple-500" />
            SYSTEM.ENDORSEMENTS
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <ScrambleText text="Client" duration={1000} delay={200} />
            &nbsp;
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-violet-400">
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
              className="relative group bg-[#060c21] p-8 border border-slate-800 transition-all duration-300 flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-600/20 group-hover:bg-purple-500 transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-purple-500 group-hover:border-t-2 group-hover:border-r-2 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-purple-500 group-hover:border-b-2 group-hover:border-l-2 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>

              <div className="relative z-10 mb-8">
                <MessageSquare
                  className="text-purple-500/50 mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                  size={32}
                />
                <p className="text-slate-300 leading-relaxed font-mono text-sm">
                  " {testimonial.content} "
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                    <User className="text-purple-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-mono text-purple-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 px-2 py-1 bg-purple-500/10 border border-purple-500/30">
                <ShieldCheck size={12} className="text-purple-400" />
                <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
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
