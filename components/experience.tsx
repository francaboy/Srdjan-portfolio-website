"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Uvoz komponenti za vertikalni prikaz
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/theme-context"; // Uvoz hook-a za rad sa temama

export default function Experience() {
  const { ref } = useSectionInView("Experience"); // Dobijanje ref-a za praćenje vidljivosti sekcije
  const { theme } = useTheme(); // Dobijanje trenutne teme iz konteksta

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <motion.section
        className="text-4xl font-medium capitalize mb-20 mt-1 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        My Experience
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255,0.5)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize text-black dark:text-[#877cdb]">
                  {item.title}
                </h3>
                <h3 className="font-normal text-[15px] ">{item.company}</h3>
                <h3 className="font-normal text-[15px]  !mt-0">
                  {item.location}
                </h3>
                <p className="!mt-3 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </motion.section>
    </section>
  );
}
