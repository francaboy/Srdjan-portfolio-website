import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import clsx from "clsx";
import { useHeaderVisibilityContext } from "@/context/header-visibility-context";
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

// Funkcionalni komponent za zaglavlje stranice
export default function Header() {
  // Izvlačimo neophodna stanja i funkcije iz konteksta pomoću hook-ova
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { isHeaderVisible } = useHeaderVisibilityContext();

  // Ako je zaglavlje nevidljivo, vraćamo null da bismo sakrili zaglavlje
  if (!isHeaderVisible) {
    return null;
  }

  // Funkcija za obradu dogadjaja klika na navigacionim linkovima
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: LinkType
  ) => {
    e.preventDefault();
    // Pronalazimo element sa odgovarajućim hash-om
    const element = document.getElementById(link.hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      // Postavljamo aktivnu sekciju na osnovu kliknutog linka
      setActiveSection(link.name);
      // Azurirnje vremena posljednjeg klika radi upravljanja interakcijama
      setTimeOfLastClick(Date.now());
    }
  };

  // Renderovanje komponente
  return (
    <header className="hidden sm:block z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border
         border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] 
         backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full
         dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className="flex fixed left-1/2 h-12 -translate-x-1/2 py-0 justify-center
       sm:top-[1.538rem] sm:h-[initial] sm:py-0 z-[998]"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1
         text-[1rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={`#${link.hash}`}
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute
                     inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
