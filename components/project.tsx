import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useHeaderVisibilityContext } from "@/context/header-visibility-context";

type ProjectsProps = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  projectUrl: string;
  technologies: string[];
  onDetailsClick: () => void; // Funkcija za prikaz detalja projekta
  category: string; // Dodajemo kategoriju kao prop
};

export default function Project({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
  onDetailsClick,
  category,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setIsHeaderVisible } = useHeaderVisibilityContext();

  const handleDetailsClick = () => {
    setIsHeaderVisible(false);
    onDetailsClick();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-gray-500 dark:hover:bg-gray-700">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold dark:text-white">{title}</h3>

          <div
            className="sm:hidden overflow-hidden rounded-lg shadow-2xl mb-4 mt-4"
            style={{ width: "300px", height: "240px" }}
          >
            <Image src={imageUrl} alt={title} quality={95} loading="lazy" />
          </div>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white">
            {description}
          </p>

          <div className="mt-4 flex gap-2 sm:mt-auto">
            <button
              onClick={handleDetailsClick}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-[#877cdb] hover:text-white transition duration-300 ease-in-out dark:bg-gray-800 dark:hover:bg-[#877cdb]"
            >
              View Details
            </button>

            {category !== "Design" && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-[#877cdb] hover:text-white transition duration-300 ease-in-out dark:bg-gray-800 dark:hover:bg-[#877cdb]"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>

        <div className="hidden sm:block absolute top-8 -right-40">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            loading="lazy"
            className="w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        </div>
      </section>
    </motion.div>
  );
}
