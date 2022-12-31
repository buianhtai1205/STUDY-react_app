import { useEffect, useState } from "react";

const CountDown = () => {
    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (countdown > 0)
                setCountdown(countdown - 1)
        }, 1000)

        console.log('>>call use effice')

        // clean up tránh rò tỉ bộ nhớ
        return () => {
            clearTimeout(timeId)
        }
    }, [countdown])

    return (
        <div>
            <h1>{ countdown }</h1>
        </div>    
    )
}

export default CountDown;