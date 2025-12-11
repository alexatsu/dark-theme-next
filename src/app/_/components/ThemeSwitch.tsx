"use client";

import { useState, useEffect, useCallback } from "react";

export enum Themes {
  dark = "dark",
  light = "light",
}

type Theme = keyof typeof Themes;

export const localStorageThemeKey = "theme";
export const dataAttributeKey = "data-theme";

const getFromLS = () => localStorage.getItem(localStorageThemeKey) as Theme;
const setToLS = (theme: Theme) => localStorage.setItem(localStorageThemeKey, theme);

export function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>();

  const setThemeFromLS = useCallback(() => {
    const themeFromLS = getFromLS();

    if (themeFromLS) {
      setTheme(themeFromLS);
    }
  }, []);

  const handleThemeSwitch = () => {
    const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
    document.documentElement.setAttribute(dataAttributeKey, newTheme);
    setTheme(newTheme);
    setToLS(newTheme);
  };

  useEffect(() => setThemeFromLS(), [setThemeFromLS]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <button
        onClick={handleThemeSwitch}
        className="absolute top-4 right-4 rounded bg-gray-300 dark:bg-gray-700 px-4 py-2"
      >
        Toggle Theme
      </button>
    </div>
  );
}
