import { createContext, useState } from "react";

const ThemeContextCreate = createContext()

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
        <ThemeContextCreate.Provider value={value}>
            {children}
        </ThemeContextCreate.Provider>
    )
}

export {ThemeContextCreate, ThemeProvider} 