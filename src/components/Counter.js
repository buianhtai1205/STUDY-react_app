import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={ handleIncreaseCount }>Increase</button>
        </div>  
          
    )
}

export default Counter;