"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";
export const ModeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-row items-center gap-5 mt-16">
      <button
        className="hover:text-blue-500 transition text-blue-500 dark:text-white dark:hover:text-blue-500"
        onClick={() => setTheme("light")}
      >
        <SunIcon />
      </button>
      <button
        className="hover:text-blue-500 transition dark:text-blue-500"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon />
      </button>
    </div>
  );
};
