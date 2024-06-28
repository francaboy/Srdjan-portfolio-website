import React from "react";
import { useActiveSectionContext } from "@/context/active-section-context"; // Import custom hooka useActiveSectionContext iz active-section-context modula

// Definicija LinkType koja opisuje strukturu linka u footeru
type LinkType = {
  name: "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact"; // Naziv linka
  hash: "home" | "about" | "projects" | "skills" | "experience" | "contact"; // Hash vrednost za scrollTo funkcionalnost
};

const footerLink: LinkType = { name: "Home", hash: "home" }; // Definicija podrazumijevanog linka u footeru

export default function Footer() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); // Uzimanje setActiveSection i setTimeOfLastClick funkcija iz contexta

  // Funkcija koja se poziva prilikom klika na link u footeru
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, // Event za klik na anchor element
    link: LinkType // Tip linka koji se proslijeđuje
  ) => {
    e.preventDefault(); // default ponašanje klika na anchor elementu
    const element = document.getElementById(link.hash); // Dohvatanje elementa na osnovu hash vrednosti
    if (element) {
      window.scrollTo({
        top: element.offsetTop, // Pomjeranje na vrh određenog elementa
        behavior: "smooth",
      });
      setActiveSection(link.name); // Postavljanje aktivne sekcije na osnovu linka
      setTimeOfLastClick(Date.now()); // Postavljanje vremena posljednjeg klika
    }
  };

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white">
      {" "}
      <small className="mb-2 block text-xs">
        {" "}
        &copy; {new Date().getFullYear()}
        <span className="font-semibold text-[#877cdb]">
          <a href="#home" onClick={(e) => handleLinkClick(e, footerLink)}>
            {" "}
            Srđan.
          </a>
        </span>{" "}
        All rights reserved.
      </small>
      <p className="text-xs">
        {" "}
        Built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion,
        React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
