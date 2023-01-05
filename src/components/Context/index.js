import { useContext } from "react";
import Content from "./Content";
import { ThemeContextCreate } from "./ThemeContext";

const ThemeContext = () => {
    const themeContext = useContext(ThemeContextCreate)
    
    return (
        <div>
            <h1>Theme handle</h1>
            <button onClick={themeContext.handleSetTheme}>Toggle Theme</button>
            <Content ></Content>
        </div>
    )
}

export default ThemeContext;