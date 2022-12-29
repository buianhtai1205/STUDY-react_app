import { useState } from "react";


const ToDoList = () => {
    const [job, setJob] = useState();
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs')) ?? []

        return storageJobs;
    });

    const handleSubmitAddJob = () => {
        setJobs( prev => {
            const newJobs = [...prev, job];

            // save to localStorage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs;
        });
        setJob('');
    }

    const handleDeleteJob = (item) => {
        setJobs( prev => {
            console.log(item)
            const newJobs = prev.filter(job => job !== item);

            // save to localStorage
            if(newJobs.length !== 0) {
                console.log(newJobs)
                const jsonJobs = JSON.stringify(newJobs)
                localStorage.setItem('jobs', jsonJobs)
            } else {
                localStorage.removeItem('jobs')
            }
            
            return newJobs;
        });
    }

    return (
        <div>
            <h1>ToDoList APP</h1>
            <input 
                type="text"
                onChange={ (event) => setJob(event.target.value)}
                value={ job }
            />
            <button onClick={ handleSubmitAddJob }>Add</button>

            <ul>
            { jobs.map( (item, index) => (
                <li key={ index }>
                    { item }
                    <button onClick={ () => handleDeleteJob(item) }>Xong</button>
                </li>
            ))}
            </ul>
        </div>    
    )
}

export default ToDoList;