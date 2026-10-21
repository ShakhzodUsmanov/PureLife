"use client";

import React, { createContext, useContext, useState, useSyncExternalStore } from "react";
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

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "RU";
  const saved = localStorage.getItem("purelife_lang") as Language;
  if (saved && (saved === "RU" || saved === "UZ" || saved === "EN")) {
    return saved;
  }
  return "RU";
}

function getServerSnapshot(): Language {
  return "RU";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const clientLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [overrideLang, setOverrideLang] = useState<Language | null>(null);

  const language = overrideLang ?? clientLang;

  const setLanguage = (lang: Language) => {
    setOverrideLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("purelife_lang", lang);
      window.dispatchEvent(new Event("storage"));
    }
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
