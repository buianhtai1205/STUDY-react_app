import {SET_JOB, ADD_JOB, DEL_JOB} from './constraints'

//init 
export const initState = {
    job: '',
    jobs: []
}

//reducer
const reducer = (state, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DEL_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error("Invalid action")
    }
}

export default reducer;