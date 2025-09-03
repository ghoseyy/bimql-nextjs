"use client";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // optional, you can use any icon library

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR rendering

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Moon className="w-5 h-5 text-yellow-300" /> : <Sun className="w-5 h-5 text-yellow-500" />}
    </button>
  );
}
