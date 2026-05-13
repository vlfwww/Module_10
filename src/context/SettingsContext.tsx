import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { SettingsContextProps } from "../types/common";
import { getStorageItem } from "../utils/storage";

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isListView, setIsListView] = useState<boolean>(() =>
    getStorageItem("isListView", false),
  );

  useEffect(() => {
    localStorage.setItem("isListView", JSON.stringify(isListView));
  }, [isListView]);

  const toggleView = () => setIsListView((prev) => !prev);

  return (
    <SettingsContext.Provider value={{ isListView, toggleView }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error("useSettings must be used within SettingsProvider");
  return context;
};
