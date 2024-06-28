import React from "react";
import { LuClipboardCopy } from "react-icons/lu";

import { useTheme } from "@/context/theme-context"; // Uvoz hook-a za rad sa temama iz konteksta
import toast from "react-hot-toast"; // Uvoz biblioteke za prikaz obaveštenja

export default function ClipboardButton() {
  const { theme } = useTheme(); // Dobijanje trenutne teme iz konteksta

  // Funkcija za kopiranje e-mail adrese u clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("srdjan.msevic@gmail.com"); // Kopiranje teksta u clipboard

    // Prikaz obaviještenja o uspešnom kopiranju e-mail adrese
    toast.success("Email address copied", {
      style: {
        borderRadius: "10px",
        backdropFilter: "blur(4px)",
        background:
          theme === "light"
            ? "rgba(240, 240, 240, 0.8)"
            : "rgba(50, 50, 50, 0.7)",
        color: theme === "light" ? "#000" : "#fff",
      },
    });
  };

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] px-5 bg-white text-black rounded-full outline-none borderBlack transition focus:scale-110 hover:scale-105 hover:bg-[#877cdb] hover:text-white active:scale-105 cursor-pointer dark:bg-white dark:bg-opacity-10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
      type="button"
      onClick={() => handleCopyToClipboard()} // Pozivanje funkcije za kopiranje na klik dugmeta
    >
      {"E-mail"}
      <LuClipboardCopy className="text-md opacity-70 transition-all group-hover:scale-[1.2]" />
    </button>
  );
}
