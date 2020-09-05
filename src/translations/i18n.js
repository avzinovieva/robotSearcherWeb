import i18n from 'i18n-js';
import memoize from 'lodash/memoize';
import en from './en';

i18n.translations = {en};

const t = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

export default t;