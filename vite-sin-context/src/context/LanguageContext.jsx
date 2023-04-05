import { createContext, useState } from "react";

const initialLanguage = "es";
//para cada idioma se debera tener el texto con la traduccion correspondiente
const translations = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application with Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const LanguageContext=createContext()

const LanguageProvider=({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
const handleLanguage = (e) => {
    setLanguage(e.target.value);
    setTexts(translations[e.target.value]);
  };
  const data={
    language,
    setLanguage,
    texts,
    setTexts,
    handleLanguage
  }
  return(
    <LanguageContext.Provider value={data} >{children}</LanguageContext.Provider>
  )
}

export{LanguageProvider};

export default LanguageContext;