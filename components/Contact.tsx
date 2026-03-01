"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Terminal,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    // Add Web3Forms access key
    const accessKey = "229d2052-70cf-4714-9e32-29677af823c9";
    if (!accessKey) {
      console.error("Web3Forms access key not found");
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);
    // Optional: subject customization, from name, etc.
    formData.append(
      "subject",
      `New message from ${formData.get("name")} via Portfolio`,
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();

        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Error from Web3Forms:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      className="py-24 relative bg-[#020617] border-t border-slate-800"
      id="contact"
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
            SYSTEM.COMMUNICATION
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            Get In &nbsp;
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
              Touch.
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-mono max-w-2xl mx-auto uppercase tracking-widest">
            {">"} Establishing secure connection. Awaiting transmission data.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-[#060c21] p-6 border border-slate-800 flex items-start gap-4 transition-all duration-300 group cursor-default overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600/20 group-hover:bg-blue-500 transition-colors duration-300"></div>

              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-blue-500 group-hover:border-t-2 group-hover:border-r-2 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-blue-500 group-hover:border-b-2 group-hover:border-l-2 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>

              <div className="w-12 h-12 bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.2)] relative z-10">
                <Mail className="text-blue-500" size={20} />
              </div>
              <div className="relative z-10">
                <h3 className="text-sm font-mono font-bold text-white mb-1 uppercase tracking-widest">
                  Email
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
              className="relative bg-[#060c21] p-6 border border-slate-800 flex items-start gap-4 transition-all duration-300 group cursor-default overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-600/20 group-hover:bg-purple-500 transition-colors duration-300"></div>

              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-purple-500 group-hover:border-t-2 group-hover:border-r-2 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600 opacity-30 z-20 pointer-events-none group-hover:border-purple-500 group-hover:border-b-2 group-hover:border-l-2 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30"></div>

              <div className="w-12 h-12 bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.2)] relative z-10">
                <Phone className="text-purple-400" size={20} />
              </div>
              <div className="relative z-10">
                <h3 className="text-sm font-mono font-bold text-white mb-1 uppercase tracking-widest">
                  Phone
                </h3>
                <a
                  href="tel:+923369815769"
                  className="text-slate-400 text-sm font-mono hover:text-purple-400 transition-colors"
                >
                  +92 336 9815769
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3 bg-[#060c21] p-8 md:p-10 border border-slate-800 relative group overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none z-10 opacity-30"></div>

            <form
              className="flex flex-col gap-6 relative z-20"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2"
                  >
                    <span className="text-blue-500">{">"}</span>Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="peer w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="space-y-2 relative">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2"
                  >
                    <span className="text-blue-500">{">"}</span>Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="m@example.com"
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
                  <span className="text-blue-500">{">"}</span>Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
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
                  <span className="text-blue-500">{">"}</span>Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="ENTER MESSAGE..."
                  className="peer w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors resize-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] relative z-10"
                ></textarea>
                <div className="absolute bottom-1.5 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 z-20"></div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <div className="w-full sm:w-auto">
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-emerald-400 text-xs font-mono flex items-center gap-2"
                    >
                      <CheckCircle size={14} /> MESSAGE SENT SUCCESSFULLY
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-rose-400 text-xs font-mono flex items-center gap-2"
                    >
                      <AlertCircle size={14} /> COMMUNICATION FAILURE. RETRY
                      LATER.
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-blue-600/10 cursor-pointer hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500 text-xs font-mono tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
