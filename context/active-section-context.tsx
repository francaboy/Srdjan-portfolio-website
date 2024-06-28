"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

//vrsta tipa koje definisem za kontekst
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName; //aktivna sekcija na sajtu
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number; // vrijeme zadnjeg klika
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

//ovdje kreiram kontekst
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// provajder komponenta za trenutno aktivnu sekciju
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

//hook za koristenje konteksta sekcije
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
