import './themeContext.scss'
import { actions, useStore, useTheme } from '../../store'

const Paragraph = () => {
    const themeContext = useTheme()
    const [state, dispatch] = useStore()
    const {todos} = state

    return (
        <div>
            <p className={themeContext.theme} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>    
            <ul>
                {todos && todos.map((item, index) => (
                    <li key={index}>{item} 
                        <span onClick={() => dispatch(actions.delJob(index))} >&times;</span>
                    </li>    
                ))}
            </ul>
        </div>
    )
}

export default Paragraph;