"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import DetailsModal from "./popup/DetailsModal";
import { StaticImageData } from "next/image";

type Category = "Featured" | "Websites" | "Design";

type ProjectType = {
  title: string;
  client: string;
  category: Category;
  description: string;
  details: string;
  details2: string;
  imageUrl: StaticImageData;
  topimg: StaticImageData;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  technologies: string[];
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const [activeTab, setActiveTab] = useState<Category>("Featured");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const handleTabSwitch = (tab: Category) => {
    setActiveTab(tab);
    setCurrentIndex(0);
    setDirection(1);
  };

  const handleDetailsClick = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "Featured") return true;
    return project.category === activeTab;
  });

  const showCarousel = filteredProjects.length > 4;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= filteredProjects.length
        ? 0
        : prevIndex + itemsPerPage
    );
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? (totalPages - 1) * itemsPerPage
        : prevIndex - itemsPerPage
    );
  }, [totalPages, itemsPerPage]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction === 1 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction: number) => ({
      x: direction === 1 ? -1000 : 1000,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section ref={ref} id="projects" className="scroll-m-28">
      <motion.section
        className="text-4xl font-medium capitalize mb-20 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        My Projects
      </motion.section>

      <div className="flex justify-center mb-8">
        <motion.div
          className="bg-white rounded-xl border border-white border-opacity-40 bg-opacity-80 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem] flex space-x-4 p-2 dark:bg-gray-700 dark:border-none dark:bg-opacity-75"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {["Featured", "Websites", "Design"].map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-gray-200 text-black dark:text-white dark:bg-gray-800 dark:border-none"
                  : "text-gray-500 dark:text-gray-300"
              }`}
              onClick={() => handleTabSwitch(tab as Category)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="relative" {...swipeHandlers}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            style={{ userSelect: "none" }}
          >
            {showCarousel
              ? filteredProjects
                  .slice(currentIndex, currentIndex + itemsPerPage)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="mb-4"
                    >
                      <Project
                        {...project}
                        technologies={[...project.technologies]}
                        onDetailsClick={() => handleDetailsClick(project)}
                      />
                    </motion.div>
                  ))
              : filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <Project
                      {...project}
                      technologies={[...project.technologies]}
                      onDetailsClick={() => handleDetailsClick(project)}
                    />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>
        {showCarousel && (
          <>
            <div className="absolute top-[49%] transform -translate-y-1/2 -left-20 -ml-20 hidden md:block">
              <motion.button
                onClick={prevSlide}
                className="rounded-full border bg-black  border-white p-4  w-20 h-20 flex items-center justify-center
                hover:bg-[#9d90fe] hover:text-white font-bold transition-all duration-300 text-justify text-2xl dark:bg-gray-700 dark:hover:bg-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-left.png"
                  alt="long-arrow-left"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </motion.button>
            </div>
            <div className="absolute top-[49%] transform -translate-y-1/2 -right-20 -mr-20 hidden md:block">
              <motion.button
                onClick={(event) => {
                  nextSlide();
                  event.stopPropagation();
                }}
                className="rounded-full border bg-black border-white p-4  w-20 h-20 flex items-center justify-center hover:bg-[#9d90fe]
                        hover:text-white font-bold transition-all duration-300 text-justify text-2xl dark:bg-gray-700 dark:hover:bg-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-right.png"
                  alt="long-arrow-right"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </motion.button>
            </div>
          </>
        )}
      </div>

      <DetailsModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={closeModal}
      />
    </section>
  );
}
