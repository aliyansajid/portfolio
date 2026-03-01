import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-blue-500/30 font-sans overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />

      <footer className="relative py-12 border-t border-slate-800 bg-[#060c21] overflow-hidden z-10">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-slate-300 font-mono text-sm tracking-widest uppercase">
            <span className="p-2 bg-slate-900 border border-slate-800 text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              <Terminal size={16} />
            </span>
            <span>SYSTEM.END_OF_FILE // {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase hidden md:block">
              [AS.PORTFOLIO_V2.0]
            </span>
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase">
              BUILT_WITH(NEXT.JS, TAILWIND)
            </span>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-cyan-400 to-purple-600 opacity-80"></div>
      </footer>
    </main>
  );
}
