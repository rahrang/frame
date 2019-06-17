import { createGlobalStyle, DefaultTheme } from 'styled-components';

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
    font-family: 'system-ui';
    margin: 0;
    padding: 0;

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

    .flex-row {
      display: flex;
    }
    .flex-col {
      display: flex;
      flex-direction: column;
    }
    
    .items-baseline {
      align-items: baseline;
    }
    .items-start {
      align-items: flex-start;
    }
    .items-end {
      align-items: flex-end;
    }
    .items-center {
      align-items: center;
    }
    
    .content-start {
      justify-content: flex-start;
    }
    .content-end {
      justify-content: flex-end;
    }
    .content-center {
      justify-content: center;
    }
    .content-between {
      justify-content: space-between;
    }
    .content-around {
      justify-content: space-around;
    }
  }
`;
