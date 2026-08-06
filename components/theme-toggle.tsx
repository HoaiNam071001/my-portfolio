"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- next-themes hydration guard: no theme is known until mounted on the client
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-transform hover:scale-105 active:scale-95"
    >
      {mounted && resolvedTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
