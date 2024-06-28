import { useTheme } from "@/context/theme-context"; // Import custom hooka useTheme iz theme-context modula
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitchHeader() {
  const { theme, toggleTheme } = useTheme(); // Uzimanje trenutne teme i funkcije za promjenu teme iz useTheme hooka

  return (
    <button
      className="bottom-5 right-5 w-16 h-16 flex items-center justify-center
      text-2xl hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme} // Promjena teme na klik dugmeta
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
