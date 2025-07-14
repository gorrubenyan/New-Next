// ThemeContext.tsx կամ համապատասխան ֆայլում
'use client';

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    darkMode: "light",
    toggleTheme: () => {},
});

const getInitialTheme = () => {
    if (typeof window !== "undefined") {
        return window.localStorage.getItem("theme") || "light";
    }
    return "light"; // server side fallback
};

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode === "dark");
        window.localStorage.setItem("theme", darkMode);
    }, [darkMode]);

    const toggleTheme = () => setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
