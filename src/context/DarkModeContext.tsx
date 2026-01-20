import { createContext, useContext, useState, useEffect } from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first (user's saved preference)
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }
    
    // If no saved preference, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    
    // Default to light mode
    return false;
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      // Save the user's preference
      localStorage.setItem("darkMode", String(newMode));
      return newMode;
    });
  };

  // Apply dark mode class to html element
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  // Listen for system dark mode changes (optional - updates if user changes system setting)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);