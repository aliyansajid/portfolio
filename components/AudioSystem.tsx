"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Create context to allow manual firing if needed, though we rely on a global event listener
const AudioContext = createContext({
  playHoverSound: () => {},
  playTypeSound: () => {},
  toggleMute: () => {},
  isMuted: false,
});

export const useAudio = () => useContext(AudioContext);

export function AudioSystemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneOscillatorsRef = useRef<OscillatorNode[]>([]);
  const droneGainRef = useRef<GainNode | null>(null);

  // Initialize Web Audio API on first user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (
          window.AudioContext || (window as any).webkitAudioContext
        )();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().then(() => {
          if (!isMuted) {
            startDrone();
          }
        });
      } else if (!isMuted) {
        startDrone();
      }

      window.removeEventListener("click", initAudio);
      window.removeEventListener("keydown", initAudio);
    };

    window.addEventListener("click", initAudio);
    window.addEventListener("keydown", initAudio);

    return () => {
      window.removeEventListener("click", initAudio);
      window.removeEventListener("keydown", initAudio);
    };
  }, [isMuted]);

  const startDrone = () => {
    const ctx = audioCtxRef.current;
    if (!ctx || droneOscillatorsRef.current.length > 0) return;

    // Create a low ambient drone (cyberpunk / sci-fi style)
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.03; // Keep it quiet so as not to overpower
    masterGain.connect(ctx.destination);
    droneGainRef.current = masterGain;

    const baseFreq = 55; // Low A

    // Create 3 oscillators for a rich, shifting drone
    const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2.01];

    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const delay = ctx.createDelay(3.0);
      const feedback = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sawtooth";
      osc.frequency.value = freq;

      // Filter out harsh high frequencies
      filter.type = "lowpass";
      filter.frequency.value = 300;

      // Delay network to create a wider, ambient atmosphere
      delay.delayTime.value = 1.0 + Math.random();
      feedback.gain.value = 0.5;

      osc.connect(filter);
      filter.connect(masterGain);

      // Add feedback loop
      filter.connect(delay);
      delay.connect(feedback);
      feedback.connect(delay);
      delay.connect(masterGain);

      osc.start();
      droneOscillatorsRef.current.push(osc);
    });
  };

  const stopDrone = () => {
    const ctx = audioCtxRef.current;
    if (ctx && droneGainRef.current) {
      // Fade out smoothly
      droneGainRef.current.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
      setTimeout(() => {
        droneOscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        });
        droneOscillatorsRef.current = [];
      }, 1000);
    }
  };

  useEffect(() => {
    if (audioCtxRef.current) {
      if (isMuted) {
        stopDrone();
      } else {
        startDrone();
      }
    }
  }, [isMuted]);

  const playHoverSound = () => {
    if (isMuted || !audioCtxRef.current) return;

    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    // GTA Vice City / San Andreas style UI menu blip
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Square wave gives that retro video game menu feel
    osc.type = "square";

    // Pitch envelope: slight drop
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

    // Filter envelope: quick lowpass sweep
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);

    // Amplitude envelope: sharp attack, fast decay
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const playTypeSound = () => {
    if (isMuted || !audioCtxRef.current) return;

    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    // Create a very short burst of high-passed noise for a "clack"
    const bufferSize = ctx.sampleRate * 0.05; // 50ms buffer
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Generate white noise
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Filter to make it sound "ticky" and mechanical
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 5000;
    filter.Q.value = 1.5;

    const gainNode = ctx.createGain();

    // Very fast, sharp envelope
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start(ctx.currentTime);
  };

  // Global hover listener for all interactive elements
  useEffect(() => {
    let currentHoverTarget: HTMLElement | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      if (isMuted) return;

      const target = e.target as HTMLElement;
      // Trigger sound on links, buttons, and form inputs
      const interactable = target.closest(
        'a, button, [role="button"], input, textarea',
      );

      if (interactable && interactable !== currentHoverTarget) {
        currentHoverTarget = interactable as HTMLElement;
        playHoverSound();
      } else if (!interactable) {
        currentHoverTarget = null;
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [isMuted]);

  // Global typing listener for all inputs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't play if muted or if it's a modifier key
      if (
        isMuted ||
        [
          "Shift",
          "Control",
          "Alt",
          "Meta",
          "Tab",
          "CapsLock",
          "Escape",
        ].includes(e.key)
      ) {
        return;
      }

      const target = e.target as HTMLElement;

      // Check if we are typing inside a form element
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isInput) {
        playTypeSound();
      }
    };

    // Use capture phase to ensure we catch it before React occasionally swallows it
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [isMuted]);

  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <AudioContext.Provider
      value={{ playHoverSound, playTypeSound, toggleMute, isMuted }}
    >
      {children}

      {/* Universal Audio Control Toggle */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 p-3 bg-[#060c21]/90 backdrop-blur-md border border-slate-700 text-slate-400 hover:text-blue-500 hover:border-blue-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all group overflow-hidden"
        title={isMuted ? "Enable Audio System" : "Disable Audio System"}
      >
        <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        <div className="relative z-10 flex items-center justify-center">
          {isMuted ? (
            <VolumeX size={20} />
          ) : (
            <Volume2 size={20} className="text-blue-500 animate-pulse" />
          )}
        </div>
      </button>
    </AudioContext.Provider>
  );
}
