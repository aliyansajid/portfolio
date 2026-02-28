"use client";

import { useEffect, useState } from "react";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function ScrambleText({
  text,
  duration = 1000,
  delay = 0,
  className = "",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startAnimation = () => {
      setIsAnimating(true);
      let iteration = 0;
      const maxIterations = text.length;
      const intervalDuration = duration / maxIterations;

      intervalId = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === " ") return " ";
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join(""),
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setIsAnimating(false);
          setDisplayText(text);
        }

        iteration += 1 / 3; // Controls how fast it resolves per tick
      }, intervalDuration);
    };

    timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, duration, delay]);

  // Initial render empty until JS kicks in, or start scattered
  return (
    <span className={className}>
      {isAnimating || displayText ? displayText : text}
    </span>
  );
}
