import React from 'react';
import { App } from './App';

import i18next from "i18next";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { getCurrentLanguage } from './utils/language-utils';
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: getCurrentLanguage(),
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next} >
      <App />
    </I18nextProvider>
  </BrowserRouter>
);

