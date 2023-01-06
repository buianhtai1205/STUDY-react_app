import { useContext } from "react"
import { StoreContext } from "."
import { ThemeContext } from "../contexts/ThemeContext"


export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext)
    
    return [state, dispatch]
}

export const useTheme = () => {
    const themeContext = useContext(ThemeContext)

    return themeContext
}
