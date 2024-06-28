"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { useActiveSectionContext } from "@/context/active-section-context";
import { IoMdClose } from "react-icons/io"; // import react ikonica
import Image from "next/image";
import { useTheme } from "@/context/theme-context";
import ThemeSwitchHeader from "./theme-switch-header";

// Define the LinkType type
type LinkType = {
  name: "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact";
  hash: "home" | "about" | "projects" | "skills" | "experience" | "contact";
};

// Define the links array with LinkType
export const links: LinkType[] = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Projects", hash: "projects" },
  { name: "Skills", hash: "skills" },
  { name: "Experience", hash: "experience" },
  { name: "Contact", hash: "contact" },
];

interface HamburgerProps {
  logo: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false); // funkcija za azuriranje stanja menija
  const { theme } = useTheme();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const menuVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  }; // objekat koji sadrzi animacije kad je meni otvoren ili zatvoren

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
    setMenuOpen(false);
  };

  return (
    <nav className="sm:hidden">
      <div
        className={`fixed top-0 left-0 w-full flex items-center justify-between bg-white dark:bg-[#877cdb]  shadow-md z-[1002] px-4 py-1 ${
          menuOpen ? "hidden" : "flex"
        }`}
      >
        <a
          className="ml-[14px]"
          href="#home"
          onClick={(e) => handleLinkClick(e, { name: "Home", hash: "home" })}
        >
          {theme === "dark" ? (
            <Image
              src="/assets/img/png//logo-light.png"
              width={64}
              height={64}
              alt="Logo-Light"
              priority
            />
          ) : (
            <Image
              src="/assets/img/png//logo.png"
              width={64}
              height={64}
              alt="Logo"
              priority
            />
          )}
        </a>
        <div className="flex items-center">
          <ThemeSwitchHeader />
          <button
            className="h-12 w-12 flex items-center justify-center text-gray-1000"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 dark:text-white ${
                menuOpen ? "text-white" : "text-gray-1000"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        className="fixed top-0 left-0 z-[1001] w-full h-full bg-black flex flex-col items-center justify-center"
        initial="closed"
        animate={menuOpen ? "open" : "closed"} // mjenja animaciju zavisno od stanja animacije
        variants={menuVariants} // varijante animacije koje sam definisao gore
      >
        {menuOpen && (
          <>
            <button
              className="h-7 w-7 flex items-center justify-center text-gray-1000 fixed top-6 left-6 z-[1002] rounded-full bg-white shadow-md dark:text-black"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose />
            </button>

            <ul className="flex flex-col items-center justify-center">
              {links.map(
                (
                  link // iteracija kroz linkove
                ) => (
                  <motion.li
                    className="my-4"
                    key={link.hash} // url na koji vodi link
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <a
                      href={`#${link.hash}`}
                      className="text-white text-lg font-medium hover:text-[#877cdb] transition"
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </>
        )}
      </motion.div>
    </nav>
  );
};

export default Hamburger;
