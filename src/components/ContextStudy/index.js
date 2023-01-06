import Content from "./Content";
import { useStore, useTheme } from "../../store";

const ContextStudy = () => {
    const themeContext = useTheme()
    const [state, dispatch] = useStore()
    console.log(state)
    
    return (
        <div>
            <h1>Theme handle</h1>
            <button onClick={themeContext.handleSetTheme}>Toggle Theme</button>
            <Content ></Content>
        </div>
    )
}

export default ContextStudy;