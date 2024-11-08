'use client'
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

// Language type corresponding to the translations
type Language = keyof typeof translations;

import en from "@/data/jsons/en.json";
import es from "@/data/jsons/es.json";

// Define translations object
const translations = {
  en,
  es,
};

// Translate function to fetch translations
export const translate = (key: TranslationKeys, language: Language): any => {
  return translations[language]?.[key] || key;
};

import { decrement, increment, incrementByAmount, setLanguage } from '@/store/features/counterSlice';
import { RootState, useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const language = useSelector((state: RootState) => state.counter.language) as Language; // Ensure correct typing

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.target.value as Language)); // Ensure correct type casting
  };

  const navigateToPage = (slug: string) => {
    router.push(`/posts/${slug}`);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav className="flex space-x-4">
          <button
            onClick={() => navigateToPage("first-post")}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            First Post
          </button>
          <button
            onClick={() => navigateToPage("second-post")}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Second Post
          </button>
          <button
            onClick={() => navigateToPage("third-post")}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Third Post
          </button>
        </nav>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </header>
      <div>
        <h1>{translate("welcome_message", language)}</h1>
        <p>{translate("description", language)}</p>
      </div>
    </>
  );
};

export default Header;
