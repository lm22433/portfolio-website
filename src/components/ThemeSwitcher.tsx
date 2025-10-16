"use client";

import { useTheme, type CatppuccinTheme } from "@/contexts/ThemeContext";
import { Palette } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: { value: CatppuccinTheme; label: string; emoji: string }[] = [
    { value: "latte", label: "Latte", emoji: "☕" },
    { value: "frappe", label: "Frappé", emoji: "🥤" },
    { value: "macchiato", label: "Macchiato", emoji: "🍵" },
    { value: "mocha", label: "Mocha", emoji: "🌙" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleThemeChange = (newTheme: CatppuccinTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all"
        aria-label="Switch theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-background-lighter border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => handleThemeChange(t.value)}
              className={`w-full px-4 py-2 text-left hover:bg-background-selection transition-colors flex items-center gap-2 ${
                theme === t.value ? "text-accent font-semibold" : "text-foreground"
              }`}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
