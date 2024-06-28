"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { useActiveSectionContext } from "@/context/active-section-context";

// Definicija LinkType koja opisuje strukturu linka u footeru
type LinkType = {
  name: "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact"; // Naziv linka
  hash: "home" | "about" | "projects" | "skills" | "experience" | "contact"; // Hash vrednost za scrollTo funkcionalnost
};

// Definišemo niz navigacionih linkova sa imenima i odgovarajućim hash vrednostima
export const links: LinkType[] = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Projects", hash: "projects" },
  { name: "Skills", hash: "skills" },
  { name: "Experience", hash: "experience" },
  { name: "Contact", hash: "contact" },
];

export default function Divider() {
  const { theme } = useTheme();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: LinkType
  ) => {
    e.preventDefault();
    const element = document.getElementById(link.hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(link.name);
      setTimeOfLastClick(Date.now());
    }
  };

  return (
    <motion.div className="justify-center items-center mt-12 hidden sm:block dark:bg-opacity-20">
      <div className="flex flex-col items-center">
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, { name: "About", hash: "about" })}
        >
          <motion.svg
            width="26px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            }}
            initial={{ opacity: 2, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.125,
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.6,
            }}
          >
            <path
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: theme === "dark" ? "#FFFFFF" : "#12141D",
                strokeWidth: "20px",
              }}
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: theme === "dark" ? "#FFFFFF" : "#12141D",
                strokeWidth: "20px",
              }}
            />
          </motion.svg>
        </a>
        <p className="text-gray-700 mt-4 dark:text-white">Scroll Down</p>
      </div>
    </motion.div>
  );
}
