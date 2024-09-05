import React, { createContext, useState, ReactNode } from "react";
import { Theme, ThemeContextType } from "./constants";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main className={`${theme} text-foreground bg-background`}>{children}</main>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider