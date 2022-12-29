import { useState } from "react"

const listCourses = [
    {
        id: 1,
        name: 'Javascript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'PHP',
    },
    {
        id: 4,
        name: 'Python',
    },
    {
        id: 5,
        name: 'C++',
    },
]

const RegisterCourse = () => {
    // const [checked, setChecked] = useState(1);
    const [checked, setChecked] = useState([])

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log({
            id: checked,
        });
    }

    const handleChecked = (courseID) => {
        setChecked(prev => {
            const isChecked = checked.includes(courseID)
            if (isChecked) {
                return prev.filter(item => item !== courseID)
            } else {
                return [...prev, courseID]
            }
        })
    }

    return (
        <div>
            <form onSubmit={ handleSubmitForm }>
                <h1>Register Course</h1>
                { listCourses.map( course => {
                    return (
                        <div key={ course.id }>
                            {/* // radio
                            <input 
                                type="radio" 
                                onChange={ () => setChecked(course.id) }
                                checked={ course.id === checked }
                            />  */}

                            {/* // checkbox */}
                            <input 
                                type="checkbox" 
                                onChange={ () => handleChecked(course.id) }
                                checked={ checked.includes(course.id) } 
                            /> 
                            { course.name }
                        </div>
                    )
                })}
                <button>Submit</button>
            </form>
        </div>    
    )
}

export default RegisterCourse;