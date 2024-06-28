"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Kasnjenje animacije na osnovu indeksa
    },
  }),
};

export default function Skills() {
  // Hook za pracenje vidljivosti sekcije
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills" // ID sekcije
      ref={ref} // Referenca za praćenje vidljivosti sekcije
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <motion.section
        className="text-4xl font-medium capitalize mb-20 mt-32 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        My Skills
      </motion.section>

      <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
          className="relative rounded-full border border-black/0.75 w-24 h-24 xl:w-24 xl:h-24 filter group transition duration-300 ease-in-out"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <div className="relative rounded-full overflow-hidden w-full h-full">
            <Image
              src={skill.logo}
              width={300}
              height={300}
              alt={skill.name}
              aria-label={skill.name}
              className="rounded-full"
              loading="lazy"
            />
          </div>
        
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-[#877cdb] rounded-full z-10 dark:bg-gray-800 dark:hover:bg-gray-800">
            <p className="text-[15px] font-bold text-white">{skill.name}</p>
            <p className="text-lg font-bold text-white mt-1">{skill.percentage}%</p>
          </div>
        </motion.li>
        
        ))}
      </ul>
    </section>
  );
}
