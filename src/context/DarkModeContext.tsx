import { createContext, useContext, useEffect } from "react";

// Simplified context
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: true, // Always true
  toggleDarkMode: () => {}, // Does nothing
});

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  
  // PERMANENTLY set dark mode on mount
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("dark");
    html.style.colorScheme = "dark";
    
    // Optional: Clear any old "light" preference so it doesn't confuse future logic
    localStorage.removeItem("darkMode");
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode: true, toggleDarkMode: () => {} }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);