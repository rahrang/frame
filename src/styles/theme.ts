import * as storage from '../utils/storage';
import * as _ from 'lodash';

const STORAGE_THEME_KEY = 'css-theme';
export const LIGHT_THEME_KEY = 'light';
export const DARK_THEME_KEY = 'dark';

export type ThemeKeyType = 'light' | 'dark';

const colors = {
  dark: '#262626',
  darker: '#121212',
  light: '#FAFAED',
  lighter: '#FFF',
  lightblue: '#29b6f6',
  darkblue: '#4B75B9',
  gold: '#F0CE3B',
};

const theme = {
  contentWidth: '900px',
  br: `0.25rem`,
};

const lightTheme = {
  bxs: '0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23)',
  bgColor: colors.light,
  textColor: colors.dark,
  headingColor: colors.darkblue,
  linkColor: colors.darkblue,
  activeColor: colors.darkblue,
  linkHoverColor: colors.gold,
  offBgColor: colors.lighter,
  blue: colors.darkblue,
};

const darkTheme = {
  bxs: '0px 0px 2px 1px white',
  bgColor: colors.darker,
  textColor: colors.light,
  headingColor: colors.lightblue,
  linkColor: colors.lightblue,
  activeColor: colors.lightblue,
  linkHoverColor: colors.gold,
  offBgColor: colors.dark,
  blue: colors.lightblue,
};

const themeKeyMap = {
  [LIGHT_THEME_KEY]: {
    colors: {
      ...lightTheme,
      ...colors,
    },
    ...theme,
  },
  [DARK_THEME_KEY]: {
    colors: {
      ...darkTheme,
      ...colors,
    },
    ...theme,
  },
};

export const getInitialTheme = () => {
  const themeKey = storage.get(STORAGE_THEME_KEY);
  if (_.includes([LIGHT_THEME_KEY, DARK_THEME_KEY], themeKey)) {
    return themeKey;
  }
  return LIGHT_THEME_KEY;
};

export const getTheme = (themeKey: ThemeKeyType) => {
  return themeKeyMap[themeKey] || themeKeyMap[LIGHT_THEME_KEY];
};

export const setTheme = (themeKey: ThemeKeyType) => {
  storage.set(STORAGE_THEME_KEY, themeKey);
};
