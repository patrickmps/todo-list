import { action, makeObservable, observable } from 'mobx';
import { createContext } from 'react';

enum ThemeType {
  dark = 'dark',
  light = 'light'
}

class ThemeStore {
  theme = ThemeType.dark;

  constructor() {
    makeObservable(this, {
      theme: observable,
      toggleTheme: action
    });
  }

  toggleTheme = () => {
    if (this?.theme === ThemeType.dark) {
      this.theme = ThemeType.light;
    } else {
      this.theme = ThemeType.dark;
    }
  };
}

export default createContext(new ThemeStore());
