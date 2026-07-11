"use client"; // za komponente koje rade na klijentu samo, kod mene imaju komponente koje koriste animaciju koja ne mogu na serveru da rade

import React from "react";
import { motion } from "framer-motion"; // library za animaciju
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center
       leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }} //pocetno stanje
      animate={{ opacity: 1, y: 0 }} // krajnje stanje animacije
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <motion.section
        className="text-4xl font-medium capitalize mb-20 mt-24 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        About me
      </motion.section>
      <p className="mb-3 font-medium text-[20px]">
        Experienced <span style={{ color: "#877cdb" }}>Graphic Designer & Web Developer</span>{" "}
        with a strong foundation in programming and design principles.
        <span> I focus on </span>
        <span style={{ color: "#877cdb" }}>React.Js</span>,{" "}
        <span style={{ color: "#877cdb" }}>Next.Js</span>,{" "}
        <span style={{ color: "#877cdb" }}>HTML</span>,{" "}
        <span style={{ color: "#877cdb" }}>CSS</span>, and{" "}
        <span style={{ color: "#877cdb" }}>JavaScript</span>, crafting dynamic
        and engaging websites. Proficient in{" "}
        <span style={{ color: "#877cdb" }}>Figma</span> and{" "}
        <span style={{ color: "#877cdb" }}>Adobe Suite</span>, I combine
        creativity with technical prowess to deliver extraordinary digital solutions.. With a background in{" "}
        <span style={{ color: "#877cdb" }}>Broadcast System Engineering,</span>{" "}
        <span style={{ color: "#877cdb" }}>Data Analysis</span>, and<span style={{ color: "#877cdb" }}>Email Marketing.</span>
        I offer a unique perspective and a diverse skill set to drive success in every project. Let&apos;s get together to make your digital dream and vision
        a reality!
      </p>
    </motion.section> // sekcija moze da ima animaciju
  );
}
