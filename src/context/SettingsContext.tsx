import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { Theme, SettingsContextType } from "../types/common";
import { getStorageItem } from "../utils/storage/storage";

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => getStorageItem<Theme>("theme", "light"));
  const [isListView, setIsListView] = useState<boolean>(() => getStorageItem("isListView", false));
  const [fontSize, setFontSize] = useState<number>(() => getStorageItem("font-size-ratio", 1));

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("isListView", JSON.stringify(isListView));
  }, [isListView]);

  useEffect(() => {
    localStorage.setItem("font-size-ratio", JSON.stringify(fontSize));
    document.documentElement.style.fontSize = `${100 * fontSize}%`;
  }, [fontSize]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const toggleView = useCallback(() => setIsListView((prev) => !prev), []);

  const changeFontSize = useCallback((size: number) => setFontSize(size), []);

  const value = {
    theme,
    toggleTheme,
    isListView,
    toggleView,
    fontSize,
    changeFontSize,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within SettingsProvider");
  return context;
};
