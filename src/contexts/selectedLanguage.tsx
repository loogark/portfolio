import React, { ReactNode, useContext, useState } from "react";

export type LangKeys = "en" | "fr";

export type SetLang = (lang: LangKeys) => void;

export interface LangContextI {
  selectedLang?: LangKeys;
  setSelectedLang: SetLang;
}

interface LangProviderProps {
  children: ReactNode;
}

export const SelectedLanguagesContext =
  React.createContext<LangContextI | null>(null);

export const SelectedLanguagesProvider = ({ children }: LangProviderProps) => {
  const [selectedLang, setSelectedLang] = useState<LangKeys>("en");

  return (
    <SelectedLanguagesContext.Provider
      value={{ selectedLang, setSelectedLang }}
    >
      {children}
    </SelectedLanguagesContext.Provider>
  );
};

export const useSelectedLanguage = () => {
  const context = useContext(SelectedLanguagesContext);
  if (context === null)
    throw new Error("Received null while reading useContext(LangContext).");
  return context;
};
