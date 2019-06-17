import 'styled-components';

// extend original module declarations
declare module 'styled-components' {
  export interface DefaultTheme {
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
}
