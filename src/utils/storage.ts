import * as _ from 'lodash';

export const exists = (() => {
  const TEST_STORAGE_KEY = '__rahul-rangnekar__';
  const TEST_STORAGE_VALUE = 'local storage exists';
  if (typeof window === 'undefined') {
    return false;
  }

  if (_.isUndefined(window) || _.isUndefined(window.localStorage)) {
    return false;
  }

  if (window.localStorage) {
    try {
      window.localStorage.setItem(TEST_STORAGE_KEY, TEST_STORAGE_VALUE);
      window.localStorage.removeItem(TEST_STORAGE_KEY);
      return true;
    } catch (err) {
      return false;
    }
  }
  return false;
})();

export const get = (key: string) => {
  if (exists) {
    const valueAsJSON = window.localStorage.getItem(key);
    if (!valueAsJSON) {
      return undefined;
    }
    try {
      const value = JSON.parse(valueAsJSON);
      return value;
    } catch (err) {
      return undefined;
    }
  }
};

export const set = (key: string, value: string | Array<any> | Object) => {
  if (exists) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const remove = (key: string) => {
  if (exists) {
    window.localStorage.removeItem(key);
  }
};
