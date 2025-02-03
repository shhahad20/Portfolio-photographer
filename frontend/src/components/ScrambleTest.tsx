// ScrambleText.tsx
import React, { useState, useEffect } from "react";

interface ScrambleTextProps {
  text: string;
  duration?: number; // Duration of the animation in milliseconds
  revealDelay?: number; // Delay before starting the reveal (ms)
  scrambleChars?: string; // Characters used for scrambling
  className?: string; // Optional CSS class
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  duration = 2000,
  revealDelay = 0,
  scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    const textLength = text.length;

    const update = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      // Wait for the reveal delay before starting the reveal effect
      const effectiveElapsed = Math.max(0, elapsed - revealDelay);
      const progress = Math.min(effectiveElapsed / duration, 1);
      const revealCount = Math.floor(progress * textLength);

      let newText = "";
      for (let i = 0; i < textLength; i++) {
        if (i < revealCount) {
          newText += text[i];
        } else {
          // Pick a random character from scrambleChars
          const randomChar =
            scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          newText += randomChar;
        }
      }
      setDisplayText(newText);

      // Continue the animation until fully revealed
      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [text, duration, revealDelay, scrambleChars]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;
