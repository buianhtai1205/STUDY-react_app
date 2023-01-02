import { useReducer, useRef } from "react"
import {setJob, addJob, delJob} from './actions'
import reducer, {initState} from './reducer'
import logger from "./logger"

const ToDoWithReducer = () => {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    const {job, jobs} = state
    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))

        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>To Do</h1>
            <input
                value={ job }
                placeholder="Enter todo..."
                onChange={ (event) => {
                    dispatch(setJob(event.target.value))
                }}
                ref={ inputRef }
            />
            <br />
            <button onClick={ handleSubmit }>Add</button>
            <ul>
                { jobs && jobs.map((job, index) => (
                    <li key={ index}>{ job } 
                        <span onClick={ () => dispatch(delJob(index)) }> &times;</span>
                    </li>    
                ))}
            </ul>
        </div>    
    )
}

export default ToDoWithReducer;