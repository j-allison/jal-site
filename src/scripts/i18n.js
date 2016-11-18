import i18next from 'i18next';

import fr from './locales/fr.json';
import en from './locales/en.json';

i18next
.init({
  lng: 'fr',
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
