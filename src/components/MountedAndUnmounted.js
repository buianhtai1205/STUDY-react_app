import { useState } from "react";
import Content from "./Content";
import CountDown from "./CountDown";

const MountedAndUnmounted = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    return (
        <div>
            <button onClick={ () => setShow(!show)}>Toggle</button>
            { show && 
                <><Content /></>
            }
            <button onClick={ () => setShow2(!show2)}>Toggle2</button>
            { show2 && 
                <><CountDown /></>
            }
        </div>    
    )
}

export default MountedAndUnmounted;