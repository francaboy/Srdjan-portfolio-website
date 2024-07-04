import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useHeaderVisibilityContext } from "@/context/header-visibility-context";

// Definisem tipove za interfejse Project i DetailsModalProps
interface Project {
  title: string;
  description: string;
  technologies: string[];
  details: string;
  details2: string;
  client: string;
  imageUrl: StaticImageData;
  topimg: StaticImageData;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
}

interface DetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

// Komponenta DetailsModal
export default function DetailsModal({
  project,
  isOpen,
  onClose,
}: DetailsModalProps) {
  const { setIsHeaderVisible } = useHeaderVisibilityContext(); // Pristupamo funkciji setIsHeaderVisible iz konteksta

  // Funkcija za obradu dogadjaja pritiska tastera na tastaturi (npr. Escape za zatvaranje moda)
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(); // Zatvori modal kada se pritisne Escape
      } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        // Obrada skrolovanja unutar sadržaja moda da bi se sprečilo skrolovanje stranice
        const modalContent = document.querySelector(".modal-content");
        if (modalContent) {
          const isTop = modalContent.scrollTop === 0;
          const isBottom =
            modalContent.scrollHeight - modalContent.scrollTop ===
            modalContent.clientHeight;

          if (
            (isTop && event.key === "ArrowUp") ||
            (isBottom && event.key === "ArrowDown")
          ) {
            event.preventDefault(); // Sprječava podrazumijevano skrolovanje stranice
          }
        }
      }
    },
    [onClose]
  );

  //Funkcija za obradu mouse wheela
  const handleWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
      const isTop = modalContent.scrollTop === 0;
      const isBottom =
        modalContent.scrollHeight - modalContent.scrollTop ===
        modalContent.clientHeight;

      if ((isTop && event.deltaY < 0) || (isBottom && event.deltaY > 0)) {
        event.preventDefault(); // Prevent website scrolling
      }
    }
  }, []);

  // Efekat koji se pokreće pri otvaranju ili zatvaranju moda
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Onemogući skrolovanje tela dok je modal otvoren
      window.addEventListener("keydown", handleKeyDown); // Dodajemo event listener za tastere na tastaturi
      window.addEventListener(
        "wheel",
        handleWheel as unknown as EventListener,
        { passive: false } //Dodajemo event listener za točak miša
      );
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener
      );
    }
    // Cleanup funkcija koja se poziva pri demontiranju komponente

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener
      );
    };
  }, [isOpen, handleKeyDown, handleWheel]);

  // Efekat koji se pokreće kada se modal zatvori
  useEffect(() => {
    if (!isOpen) {
      setIsHeaderVisible(true); //Postavljam vidljivost zaglavlja na true kada se zatvori popup
    }
  }, [isOpen, setIsHeaderVisible]); //Zavisnosti koje pokreću ponovno izvođenje efekta

  // Ako modal nije otvoren ili nije prosleđen projekat, vratiti null
  if (!isOpen || !project) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-black/85 flex items-center justify-center z-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <button
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-24 h-10 flex items-center justify-center border-4 border-bg-white text-white
         rounded-full hover:scale-[1.15] active:scale-105 transition-all duration-600 transform"
        onClick={onClose}
        aria-label="Close"
      >
        <span className="text-xl">Close</span>
      </button>
      <motion.div
        className="bg-gray-200 rounded shadow-lg w-[80vw] max-w-5xl relative p-4 md:p-[50px] max-h-[80vh] overflow-y-auto overflow-x-hidden dark:bg-gray-700 modal-content"
        variants={modal}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="overflow-hidden shadow-xl mb-8 mt-4 w-full h-auto md:w-[910px] md:h-[450px]">
          <Image
            src={project.topimg}
            alt={project.title}
            quality={95}
            layout="responsive"
            width={900}
            height={450}
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-8 md:w-[910px] mx-auto">
          <div className="flex-1 mr-0 md:mr-8">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <span className="text-xl font-light">Details</span>
            <p className="text-gray-600  mt-4 dark:text-white">
              {project.details}
            </p>
            <p className="text-gray-600  mt-4 dark:text-white">
              {project.details2}
            </p>
          </div>
          <div className="w-full md:w-[300px] flex-shrink-0 flex flex-col justify-between">
            <div>
              <div className="mt-4">
                <h3 className="text-lg font-bold dark:text-white">Client</h3>
                <p className="text-gray-800 text-xl mt-2 mb-5 dark:text-white">
                  {project.client}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold">Technology</h3>
                <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-400 px-2 py-1 rounded dark:bg-gray-800 hover:scale-[1.15] active:scale-105 transition-all duration-600 transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-1">
              <h3 className="text-lg font-bold">Share</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  className="text-gray-600 text-2xl dark:text-white hover:scale-[1.15] active:scale-105 transition-all duration-600 transform"
                  href="https://www.facebook.com/"
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-gray-600 text-2xl dark:text-white hover:scale-[1.15] active:scale-105 transition-all duration-600 transform"
                  href="https://www.instagram.com/"
                >
                  <FaInstagram />
                </a>
                <a
                  className="text-gray-600 text-2xl dark:text-white hover:scale-[1.15] active:scale-105 transition-all duration-600 transform"
                  href="https://www.linkedin.com/"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="text-gray-600 text-2xl dark:text-white hover:scale-[1.15] active:scale-105 transition-all duration-600 transform"
                  href="https://x.com/"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden shadow-xl mb-8 mt-4 w-full h-auto">
          <div className="relative w-full h-[140px] md:w-[910px] md:h-[450px]">
            <Image
              src={project.image3}
              alt={project.title}
              quality={95}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-4">
            <div className="relative w-full h-[240px] md:w-[445px] md:h-[300px] mb-4 md:mb-0">
              <Image
                src={project.image1}
                alt={project.title}
                quality={95}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div className="relative w-full h-[240px] md:w-[445px] md:h-[300px]">
              <Image
                src={project.image2}
                alt={project.title}
                quality={95}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
