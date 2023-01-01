import { useState } from "react";
import Avatar from "./Avatar";
import Content from "./Content";
import CountDown from "./CountDown";
import FakeChat from "./FakeChat";

const MountedAndUnmounted = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    return (
        <div>
            <button onClick={ () => setShow(!show)}>ToggleContent</button>
            { show && 
                <><Content /></>
            }
            <button onClick={ () => setShow2(!show2)}>ToggleCountdown</button>
            { show2 && 
                <><CountDown /></>
            }
            <button onClick={ () => setShow3(!show3) }>ToggleAvatar</button>
            { show3 && 
                <><Avatar /></>
            }
            <button onClick={ () => setShow4(!show4) }>ToggleFakeChat</button>
            { show4 && 
                <><FakeChat /></>
            }
            <hr />
        </div>    
    )
}

export default MountedAndUnmounted;