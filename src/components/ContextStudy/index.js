import { useTheme } from "../../store";
import Content from "./Content";

const ContextStudy = () => {
    const themeContext = useTheme()
    
    return (
        <div>
            <h1>Theme handle</h1>
            <button onClick={themeContext.handleSetTheme}>Toggle Theme</button>
            <Content ></Content>
        </div>
    )
}

export default ContextStudy;