"use client";

import Image from "next/image";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`relative w-11 h-6 rounded-full cursor-pointer flex items-center justify-between bg-black px-1 ${
        theme === "dark" ? "bg-slate-50" : "bg-slate-900"
      }`}
      onClick={toggleTheme}
    >
      <Image src="/moon.png" alt="moon" width={15} height={15} />
      <div
        className={`w-4 h-4 rounded-full bg-white absolute ${
          theme === "dark"
            ? "right-[3px] bg-slate-900"
            : "left-[3px] bg-slate-50"
        }`}
      ></div>
      <Image src="/sun.png" alt="sun" width={15} height={15} />
    </div>
  );
}
