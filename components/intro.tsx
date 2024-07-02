"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
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

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [audioPlayed, setAudioPlayed] = useState(false); //prati da li je pusten mp3 fajl

  //funkcija za reprodukciju mp3 fajla
  const playAudio = () => {
    const audio = new Audio("/pronunciation.mp3");
    audio.currentTime = 0; // vraca mp3 na pocetak reprodukcije
    audio.play();
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, // Parametri funkcije: događaj klika i tip linka
    link: LinkType // Objekat koji predstavlja link sa  svojstvima (name i hash)
  ) => {
    e.preventDefault(); // Zaustavlja podrazumijevano ponasanje klika linka (npr. otvaranje nove stranice)

    const element = document.getElementById(link.hash); // Pronalazi HTML element na stranici sa ID koji odgovara link.hash
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });

      setActiveSection(link.name); // Postavlja trenutno aktivnu sekciju na osnovu kliknutog linka
      setTimeOfLastClick(Date.now()); // Azurira vrijeme poslednjeg klika radi pracenja interakcija
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] p-2 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="avatar-container relative">
              <Image
                src="/assets/img/jpg/avatar.jpg"
                alt="Srđan"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />

              <div className="dialog-cloud absolute top-1/4 left-full transform -translate-y-1/2 ml-4 p-2 md:w-[140px] w-[85px] bg-black dark:bg-gray-700 text-white text-sm rounded-full opacity-0 transition-opacity duration-300">
                <div className="dialog-tail absolute top-1/2 left-[-6px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-1 border-r-8 border-r-black dark:border-r-gray-700 border-t-transparent border-b-transparent"></div>
                Click on my Name
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.2] sm:text-6xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hi, I&apos;m{" "}
          <span className="text-[#877cdb] cursor-pointer" onClick={playAudio}>
            Srđan
          </span>
        </span>{" "}
        <br />
        <span className="font-bold"> A Software Engineer</span> <br />
        <motion.p
          className="py-4 text-gray-600 max-w-full m-auto sm:text-2xl dark:text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          With over 8+ years of hands-on experience in crafting cutting-edge
          websites, dynamic web applications, and broadcast systems. My digital
          journey has equipped me with diverse skills in web development,
          graphic design, data analysis, and broadcast systems.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className=" group bg-[#000] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
            focus:scale-110 hover:scale-110 hover:bg-[#232323] active:scale-105 transition cursor-pointer
            border border-black/10 dark:bg-[#877cdb]"
            onClick={(e) =>
              handleButtonClick(e, { name: "Contact", hash: "contact" })
            }
          >
            Let&apos;s Work Together
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            className="group bg-[#877cdb] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
            focus:scale-110 hover:scale-110 hover:bg-[#9d90fe] active:scale-105 transition cursor-pointer 
            border border-black/10 dark:bg-white/10"
            href="/Srdjan_Milosevic_Resume.pdf"
            download
          >
            Curriculum Vitae{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-[#877cdb] p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:bg-[#9d90fe] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white"
            href="https://www.linkedin.com/in/srdjan-milosevic/"
            target="_blank"
            download
          >
            <BsLinkedin />
          </a>
        </motion.div>
      </motion.h1>
    </section>
  );
}
