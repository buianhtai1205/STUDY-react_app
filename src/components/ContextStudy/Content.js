import { useRef } from "react";
import { useStore, actions } from "../../store";
import Paragraph from "./Paragraph";


const Content = () => {
    const [state, dispatch] = useStore()
    const {todoInput} = state
    const inputRef = useRef()

    const handleAddJob = () => {
        dispatch(actions.addJob(todoInput))
        
        dispatch(actions.setJob(''))
        inputRef.current.focus()
    }

    return (
        <div>
            <br />
            <input 
                ref={inputRef}
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(event) => dispatch(actions.setJob(event.target.value))}
            />
            <button onClick={handleAddJob} >Add</button>
            <Paragraph />
        </div>    
    )
}

export default Content;