import { useState } from "react"

const listGifts = [
    'Microsoft Office 365 - 1 year',
    'iTOP PFD - 1 year',
    'Jetbrain - 1 year',
];

const RandomGift = () => {
    const [gift, setGift] = useState("Chưa có phần thưởng")

    const handleGetGift = () => {
        // var item = items[Math.floor(Math.random()*items.length)]; random Item in array - StackOverFlow
        setGift(listGifts[Math.floor(Math.random()*listGifts.length)]);
    }

    return (
        <div>
            <h1>{ gift }</h1>
            <button onClick={ handleGetGift }>Lấy thưởng</button>
        </div>    
    )
}

export default RandomGift;