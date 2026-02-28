"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, Terminal } from "lucide-react";
import { ScrambleText } from "./ui/scramble-text";

export default function Contact() {
  return (
    <section
      className="py-24 relative bg-[#020617] border-t border-slate-800"
      id="contact"
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
            <Terminal size={12} className="text-blue-500" />{" "}
            SYSTEM.COMMUNICATION
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <ScrambleText text="Get In" duration={1000} delay={200} />{" "}
            <span className="text-blue-500">
              <ScrambleText text="Touch." duration={1400} delay={600} />
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-mono max-w-2xl mx-auto uppercase tracking-widest">
            {">"} Establishing secure connection. Awaiting transmission data.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-[#060c21] p-6 border border-slate-800 flex items-start gap-4 hover:border-blue-500/50 transition-colors group cursor-default"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-12 h-12 bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-shadow">
                <Mail className="text-blue-500" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-mono font-bold text-white mb-1 uppercase tracking-widest">
                  Email_Address
                </h3>
                <a
                  href="mailto:aliyansajid127@gmail.com"
                  className="text-slate-400 text-sm font-mono hover:text-blue-400 transition-colors"
                >
                  aliyansajid127@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-[#060c21] p-6 border border-slate-800 flex items-start gap-4 hover:border-pink-500/50 transition-colors group cursor-default"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-12 h-12 bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.1)] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-shadow">
                <Phone className="text-pink-500" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-mono font-bold text-white mb-1 uppercase tracking-widest">
                  Comm_Link
                </h3>
                <a
                  href="tel:+923369815769"
                  className="text-slate-400 text-sm font-mono hover:text-pink-400 transition-colors"
                >
                  +92 336 9815769
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3 bg-[#060c21] p-8 md:p-10 border border-slate-800 relative group overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-slate-600 opacity-50 z-20 pointer-events-none group-hover:border-blue-500 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-slate-600 opacity-50 z-20 pointer-events-none group-hover:border-blue-500 transition-colors duration-500"></div>

            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none z-10 opacity-30"></div>

            <form
              className="flex flex-col gap-6 relative z-20"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2"
                  >
                    <span className="text-blue-500">{">"}</span> Identity_Marker
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="ENTER NAME..."
                    className="peer w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="space-y-2 relative">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2"
                  >
                    <span className="text-blue-500">{">"}</span> Return_Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ENTER EMAIL..."
                    className="peer w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              <div className="space-y-2 relative">
                <label
                  htmlFor="subject"
                  className="text-xs font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2"
                >
                  <span className="text-blue-500">{">"}</span> Transmission_Type
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="ENTER SUBJECT..."
                  className="peer w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500"></div>
              </div>

              <div className="space-y-2 relative">
                <label
                  htmlFor="message"
                  className="text-xs font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2"
                >
                  <span className="text-blue-500">{">"}</span> Payload_Data
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="ENTER MESSAGE..."
                  className="peer w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors resize-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] relative z-10"
                ></textarea>
                <div className="absolute bottom-1.5 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 z-20"></div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="group/btn relative flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-transparent border border-blue-500 text-blue-400 font-mono text-sm tracking-widest uppercase hover:bg-blue-600/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    TRANSMIT_DATA()
                    <Send
                      size={16}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </span>

                  {/* Button Glitch Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
