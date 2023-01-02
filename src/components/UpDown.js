import { useReducer, useState } from "react";

// init
const initState = 0;

// actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action')
    }
}

const UpDown = () => {
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div>
            <h1> { count }</h1>
            <button
                onClick={ () => dispatch('up')}
            >Up</button>
            <button 
                onClick={ () => dispatch('down')}
            >Down</button>
        </div>    
    )
}

export default UpDown;