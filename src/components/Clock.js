import { useEffect, useRef, useState } from "react";

const Clock = () => {
    const [count, setCount] = useState(60)

    const timeId = useRef()
    const pCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        pCount.current = count
    }, [count])

    useEffect(() => {
        console.log(h1Ref.current)
        console.log(h1Ref.current.getBoundingClientRect().top)
    })

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timeId.current)
    }

    console.log(count, pCount.current)
    return (
        <div>
            <h1 ref={ h1Ref }>{ count }</h1>
            <button onClick={ handleStart }>Start</button>
            <button onClick={ handleStop }>Stop</button>
        </div>    
    )

}

export default Clock;