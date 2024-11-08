import en from "@/data/jsons/en.json";
import es from "@/data/jsons/es.json";

const translations = {
  en,
  es,
};

// Define translation keys manually for simplicity
type TranslationKeys = 
  | "welcome_message"
  | "home"
  | "about_us"
  | "contact"
  | "services"
  | "login"
  | "logout"
  | "profile"
  | "language"
  | "select_language"
  | "description"
  | "footer"
  | "error";

type Language = keyof typeof translations;


// Define the valid keys for translations

export const translate = (key: TranslationKeys, language: Language): any => {
    return translations[language]?.[key] || key;
  };
  
