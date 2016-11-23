import i18next from 'i18next';
import Cookies from 'cookies-js';

import fr from './locales/fr.json';
import en from './locales/en.json';

i18next
.init({
  lng: Cookies.get('lang') || 'fr',
  resources: {
    en: {
      translation: en
    },
    fr: {
      translation: fr
    }
  }
}, (err, t) => {
  window.t = t;
});