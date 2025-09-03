"use client";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-purple-600">bimql</h1>
      <div className="flex items-center gap-4">
        <Button>Get Started</Button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
