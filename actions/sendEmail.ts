"use server";

import React from "react";
import { Resend } from "resend"; // Import Resend biblioteke za slanje emailova
import { validateString, getErrorMessage } from "@/lib/utils"; // Import funkcija za validaciju stringova i poruke o greškama
import ContactFormEmail from "@/email/contact-form-email";
const resend = new Resend(process.env.RESEND_API_KEY); // Kreiranje Resend objekta sa API ključem iz environment varijable

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail"); // Dobijanje email adrese pošiljaoca iz formData
  const message = formData.get("message"); // Dobijanje poruke iz formData

  // Jednostavna server-side validacija
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // Slanje email poruke
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "srdjan.msevic@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        // Kreiranje React elementa za prikaz email poruke
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    // Hvatanje greške u slučaju problema prilikom slanja
    return {
      error: getErrorMessage(error), // Vraćanje poruke o grešci
    };
  }

  return {
    data, // Vraćanje podataka o uspješnom slanju poruke
  };
};
