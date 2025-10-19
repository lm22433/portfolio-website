"use client";

import type { ReactNode } from "react";

type IDEWindowProps = {
  title: string;
  showDots?: boolean;
  className?: string;
  children?: ReactNode;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function IDEWindow({
  title,
  showDots = true,
  className,
  children,
}: Readonly<IDEWindowProps>) {
  return (
    <div className={cn("ide-panel", className)}>
      <div className={"ide-panel-header"}>
        {showDots && (
          <div className="flex items-center gap-2">
            <div className="ide-panel-dot red" />
            <div className="ide-panel-dot yellow" />
            <div className="ide-panel-dot green" />
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-text-muted text-xs sm:text-sm truncate">
            {title}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
