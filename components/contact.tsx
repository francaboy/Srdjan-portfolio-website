"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SubmitBtn from "./submit-btn"; // Uvoz komponente za dugme za slanje forme
import { sendEmail } from "@/actions/sendEmail"; // Uvoz funkcije za slanje email-a
import toast from "react-hot-toast"; // Uvoz biblioteke za prikaz obaveštenja
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import ClipboardButton from "./clip-button"; // Uvoz komponente za dugme za kopiranje u clipboard

export default function Contact() {
  const { ref } = useSectionInView("Contact"); // Koristenje hook-a za praćenje vidljivosti sekcije
  const [senderEmail, setSenderEmail] = useState(""); // Stanje za cuvanje email adrese pošiljaoca
  const [message, setMessage] = useState(""); // Stanje za cuvanje poruke

  // Funkcija za obradu submit-a forme
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Zaustavljanje podrazumijevanog ponasanja forme
    const formData = new FormData(); // Kreiranje FormData objekta
    formData.append("senderEmail", senderEmail); // Dodavanje email adrese u FormData
    formData.append("message", message); // Dodavanje poruke u FormData
    const { data, error } = await sendEmail(formData); // Pozivanje funkcije za slanje email-a sa FormData

    if (error) {
      toast.error(error); // Prikazivanje greske ako je slanje email-a neuspjesno
      return;
    }

    toast.success("Email sent successfully!");

    setSenderEmail(""); // Resetovanje email adrese nakon uspjesnog slanja
    setMessage(""); // Resetovanje poruke nakon uspjesnog slanja
  };

  return (
    <motion.section
      id="contact"
      ref={ref} // Dodavanje ref-a za praćenje vidljivosti sekcije
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <motion.section
        className="text-4xl font-medium capitalize mb-10 mt-1 text-center dark:text-white/80"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        Contact Me
      </motion.section>

      <p>
        Thank you for visiting! If you have any questions, comments, or project
        ideas, I’m eager to hear them. Please fill out the form below, and I’ll
        respond as soon as possible. Let&apos;s make something great together!
      </p>
      <motion.form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit} // Dodavanje funkcije za obradu submit-a forme
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your e-mail"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)} // Funkcija za azuriranje stanja email adrese
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:border-customBorderColor"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Funkcija za azuriranje stanja poruke
        />

        <div className="flex justify-center  gap-2">
          <SubmitBtn /> {/* Renderovanje dugmeta za slanje forme */}
          <ClipboardButton /> {/* Renderovanje  za kopiranje u clipboard */}
          <a
            href="https://www.linkedin.com/in/srdjan-milosevic/"
            target="_blank"
            aria-label="LinkedIn"
            className="bg-white h-12 w-12 text-gray-700 flex justify-center items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#877cdb] hover:text-white transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://wa.link/ypvq4i"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            className="bg-white h-12 w-12 text-gray-700 flex justify-center items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#877cdb] hover:text-white transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
          >
            <BsWhatsapp />
          </a>
        </div>
      </motion.form>
    </motion.section>
  );
}
