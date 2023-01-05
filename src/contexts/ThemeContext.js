import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const handleSetTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    const value = {
        theme,
        handleSetTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider} 