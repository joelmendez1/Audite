import { useContext } from "react";

import { TranslationContext } from "../context/translation-context";

export const userLanguage = window.navigator.language.slice(0, 2);

export const currentLanguage = (languageCode: string) => {
  const language =
    languageCode === "es" || languageCode === "en" ? languageCode : "en";
  localStorage.setItem("language", language);

  return language;
};

export const getCurrentLanguage = () => {
  const getLocalStorageLanguage = localStorage.getItem("language");

  return getLocalStorageLanguage
    ? getLocalStorageLanguage
    : currentLanguage(userLanguage);
};

export const Translate = (text: string) => {
  const { translate } = useContext(TranslationContext);

  return translate(text);
};