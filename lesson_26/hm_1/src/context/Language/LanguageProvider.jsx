import { useEffect, useState } from "react";
import LanguageContext from "./LanguageContent";
import langEn from "../../language/en";
import langUa from "../../language/ua";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const stotageVal = localStorage.getItem("lang");

    return stotageVal ? JSON.parse(stotageVal) : langEn;
  });

  const handleChangeLang = () => {
    setLanguage(language.name === "en" ? langUa : langEn);
  };

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, handleChangeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
