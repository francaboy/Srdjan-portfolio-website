import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-16 h-16 bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full  items-center justify-center
      text-2xl hover:bg-[#877cdb] hover:text-white hover:border-white hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-700 dark:border-white dark:hover:bg-white dark:hover:text-black
      hidden md:flex"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
