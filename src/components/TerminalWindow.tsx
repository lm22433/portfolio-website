"use client";

import type { ReactNode } from "react";

type TerminalWindowProps = {
  title?: string;
  showDots?: boolean;
  className?: string;
  children?: ReactNode;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function TerminalWindow({
  title = "terminal",
  showDots = true,
  className,
  children,
}: Readonly<TerminalWindowProps>) {
  return (
    <div className={cn("terminal-panel", className)}>
      <div className="terminal-panel-header">
        {showDots && (
          <div className="flex items-center gap-2">
            <div className="terminal-panel-dot red" />
            <div className="terminal-panel-dot yellow" />
            <div className="terminal-panel-dot green" />
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-text-muted text-xs sm:text-sm truncate">
            {title}
          </span>
        </div>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  );
}
