import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ua: {
    translation: {
      'required': 'обов\'язкове поле',
      'min': 'коротше за ',
      'max': 'довше за ',
    },
  },
  en: {
    translation: {
      'required': 'required',
      'min': 'shorter than ',
      'max': 'longer then ',
    },
  },
  ru: {
    translation: {
      'required': 'обязательное поле',
      'min': 'короче чем ',
      'max': 'длиннее чем ',
    },
  },
};

i18n.init({
  resources,
  lng: 'ua',
});

export default i18n;

