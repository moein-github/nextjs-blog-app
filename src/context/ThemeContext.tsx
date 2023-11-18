"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const getFromLocalStorage = (): Theme => {
  if (typeof window !== "undefined") {
    try {
      const value = localStorage.getItem("theme") as Theme;
      return value || "light";
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }

  return "light";
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => getFromLocalStorage());

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const contextValue = useContext(ThemeContext);

  if (contextValue === undefined) {
    throw new Error("Should be use useTheme inside ThemeProvider Component");
  }

  return contextValue;
};
