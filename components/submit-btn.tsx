import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom"; // Import  hooka useFormStatus iz react-dom

export default function SubmitBtn() {
  const { pending } = useFormStatus(); // Uzimanje statusa zahtijeva iz useFormStatus hooka

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] px-5 bg-white text-black rounded-full outline-none borderBlack transition focus:scale-110 hover:scale-110 hover:bg-[#877cdb] hover:text-white active:scale-105 cursor-pointer dark:bg-white dark:bg-opacity-10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
      type="submit"
    >
      {pending ? ( // Uslovno renderovanje na osnovu statusa zahtijeva
        <div className="h-5 w-5 animate-spin rounded-full border-4 border-black"></div> // Animacija dok je zahtijev u toku
      ) : (
        <>
          {"Submit"}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
