import { createGlobalStyle, DefaultTheme } from 'styled-components';

import flex from './flex';
import margin from './margin';
import padding from './padding';

export interface ITheme {
  contentWidth: string;
  br: string;
  colors: {
    bxs: string;
    bgColor: string;
    textColor: string;
    headingColor: string;
    linkColor: string;
    activeColor: string;
    linkHoverColor: string;
    offBgColor: string;
    blue: string;
    dark: string;
    darker: string;
    light: string;
    lighter: string;
    lightblue: string;
    darkblue: string;
    gold: string;
  };
}

export interface IProps {
  theme: ITheme;
}

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ::selection {
    color: ${(props: IProps) => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.linkHoverColor};
  }

  ::-moz-selection {
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.linkHoverColor};
  }

  body {
    background-color: ${props => props.theme.colors.bgColor};
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;

    margin-bottom: 4rem;

    /* TODO: add font, flex styles */

    .page-container {
      margin-top: 2rem;
      margin-bottom: 8rem;
      padding-left: 0;
      padding-right: 0;
    }

    .content-container {
      max-width: ${props => props.theme.contentWidth};
      margin-left: auto;
      margin-right: auto;

      @media (max-width: ${props => props.theme.contentWidth}) {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    .content {
      margin-top: 1rem;
    }

    h1, h2, h3, h4 {
      color: ${props => props.theme.colors.headingColor};
    }

    p, ol, ul, li {
      color: ${props => props.theme.colors.textColor};
      line-height: 1.75rem;
    }

    a {
      color: ${props => props.theme.colors.linkColor};
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.colors.linkHoverColor};
      }
    }

    ${flex}

    ${margin}
    
    ${padding}
  }
`;
