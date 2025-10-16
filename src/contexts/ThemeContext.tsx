"use client";

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";

export type CatppuccinTheme = "latte" | "frappe" | "macchiato" | "mocha";

interface ThemeContextType {
  theme: CatppuccinTheme;
  setTheme: (theme: CatppuccinTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<CatppuccinTheme>("mocha");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("catppuccin-theme") as CatppuccinTheme | null;
    if (savedTheme && ["latte", "frappe", "macchiato", "mocha"].includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = "mocha";
    }
  }, []);

  const handleSetTheme = (newTheme: CatppuccinTheme) => {
    setTheme(newTheme);
    localStorage.setItem("catppuccin-theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  const value = useMemo(() => ({ theme, setTheme: handleSetTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
