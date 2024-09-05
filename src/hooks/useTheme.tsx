import { useContext } from "react";
import { ThemeContextType } from "@/utils/constants";
import { ThemeContext } from "@/utils/ThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}