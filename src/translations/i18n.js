import i18n from 'i18n-js';
import memoize from 'lodash/memoize';
import en from './en';
import ru from './ru';
import ua from './ua';

i18n.translations = { en, ru, ua };

const t = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export default t;
