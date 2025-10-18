"use client";

import React from "react";

type Token = {
  text: string;
  className?: string;
};

export interface TypewriterCodeProps {
  tokens: Token[];
  typingSpeed?: number; // ms per character
  startDelay?: number; // ms before starting
  pauseAtEnd?: number; // ms pause before looping
  loop?: boolean;
  caret?: boolean;
  className?: string;
  caretClassName?: string;
}

export default function TypewriterCode({
  tokens,
  typingSpeed = 24,
  startDelay = 250,
  pauseAtEnd = 1200,
  loop = false,
  caret = true,
  className = "",
  caretClassName = "",
}: TypewriterCodeProps) {
  const [tokenIndex, setTokenIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const tokenRef = React.useRef(0);
  const charRef = React.useRef(0);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const resetTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalTokens = tokens.length;

  // Start delay
  React.useEffect(() => {
    if (started) return;
    const t = globalThis.setTimeout(() => setStarted(true), startDelay);
    return () => globalThis.clearTimeout(t);
  }, [started, startDelay]);

  // Keep refs in sync when state changes externally
  React.useEffect(() => {
    tokenRef.current = tokenIndex;
  }, [tokenIndex]);
  React.useEffect(() => {
    charRef.current = charIndex;
  }, [charIndex]);

  // Typing loop
  React.useEffect(() => {
    if (!started || done || totalTokens === 0) return;

    const tick = () => {
      const idx = tokenRef.current;
      const current = tokens[idx];
      if (!current) return;

      const len = current.text.length;
      if (charRef.current < len) {
        charRef.current += 1;
        setCharIndex(charRef.current);
        return;
      }

      // Move to next token
      const nextIndex = idx + 1;
      if (nextIndex >= totalTokens) {
        setDone(true);
        if (loop) {
          // reset after pause
          resetTimerRef.current = globalThis.setTimeout(() => {
            tokenRef.current = 0;
            charRef.current = 0;
            setTokenIndex(0);
            setCharIndex(0);
            setDone(false);
          }, pauseAtEnd);
        }
        // stop interval
        if (intervalRef.current) {
          globalThis.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      tokenRef.current = nextIndex;
      charRef.current = 0;
      setTokenIndex(nextIndex);
      setCharIndex(0);
    };

    intervalRef.current = globalThis.setInterval(
      tick,
      Math.max(typingSpeed, 8)
    );

    return () => {
      if (intervalRef.current) globalThis.clearInterval(intervalRef.current);
      if (resetTimerRef.current) globalThis.clearTimeout(resetTimerRef.current);
    };
  }, [started, done, totalTokens, tokens, typingSpeed, loop, pauseAtEnd]);

  const renderSpans = () => {
    const spans: React.ReactNode[] = [];
    for (let i = 0; i < tokenIndex; i++) {
      const t = tokens[i];
      if (!t) continue;
      spans.push(
        <span key={`t-${i}`} className={t.className || "text-foreground"}>
          {t.text}
        </span>
      );
    }
    // current token partial
    const current = tokens[tokenIndex];
    if (current) {
      const partial = current.text.slice(0, charIndex);
      spans.push(
        <span key={`t-${tokenIndex}`} className={current.className || "text-foreground"}>
          {partial}
        </span>
      );
    }
    return spans;
  };

  const showCaret = caret && started && (!done || loop);

  return (
    <div className={`whitespace-pre font-mono ${className}`}>
      {renderSpans()}
      {showCaret && (
        <span
          aria-hidden
          className={
            caretClassName ||
            "inline-block align-[-0.2em] w-[1px] h-[1em] bg-foreground ml-0.5 animate-pulse"
          }
        />
      )}
    </div>
  );
}
