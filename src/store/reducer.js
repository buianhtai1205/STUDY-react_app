import { SET_JOB, ADD_JOB, DEL_JOB} from './constraints'

const initState = {
    todos: [],
    todoInput: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                todoInput: action.payload,
            }
        case ADD_JOB:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DEL_JOB:
            const newJobs = [...state.todos]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                todos: newJobs
            }
        default:
            throw new Error("Invalid action")
    }
}

export { initState }
export default reducer;