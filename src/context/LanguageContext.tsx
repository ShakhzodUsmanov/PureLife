"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translations, DICTIONARY } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "RU",
  setLanguage: () => {},
  t: DICTIONARY.RU,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("RU");

  useEffect(() => {
    const saved = localStorage.getItem("purelife_lang") as Language;
    if (saved && (saved === "RU" || saved === "UZ" || saved === "EN")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("purelife_lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: DICTIONARY[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
