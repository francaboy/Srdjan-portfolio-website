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
        Experienced <span style={{ color: "#877cdb" }}>Software Engineer</span>{" "}
        with a strong base in programming languages and design principles.
        <span> I focus on </span>
        <span style={{ color: "#877cdb" }}>React.Js</span>,{" "}
        <span style={{ color: "#877cdb" }}>Next.Js</span>,{" "}
        <span style={{ color: "#877cdb" }}>HTML</span>,{" "}
        <span style={{ color: "#877cdb" }}>CSS</span>, and{" "}
        <span style={{ color: "#877cdb" }}>JavaScript</span>, crafting dynamic
        and tasty websites. Proficient in{" "}
        <span style={{ color: "#877cdb" }}>WordPress</span> and{" "}
        <span style={{ color: "#877cdb" }}>Adobe Suite</span>, I combine
        creativity with technical prowess to supply extraordinary virtual
        answers. With a history in{" "}
        <span style={{ color: "#877cdb" }}>Broadcast System Engineering</span>{" "}
        and <span style={{ color: "#877cdb" }}>Data Analysis</span>, I offer a
        unique perspective and a numerous talent set to power fulfilment in each
        challenge. Let&apos;s get together to make your digital dream and vision
        a reality!
      </p>
    </motion.section> // sekcija moze da ima animaciju
  );
}
