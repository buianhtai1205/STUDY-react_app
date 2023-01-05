import { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "../../contexts/ThemeContext";

const ContextStudy = () => {
    const themeContext = useContext(ThemeContext)
    
    return (
        <div>
            <h1>Theme handle</h1>
            <button onClick={themeContext.handleSetTheme}>Toggle Theme</button>
            <Content ></Content>
        </div>
    )
}

export default ContextStudy;