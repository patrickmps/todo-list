import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      primary: string;
      text_primary: string;
      text_secondary: string;
      button: string;
      hover_btn: string;
      border: string;
      primary_20t?: string;
    };
  }
}
