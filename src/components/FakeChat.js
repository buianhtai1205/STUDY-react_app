import { useEffect, useState } from "react";


const lessions = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ?'
    }, 
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function ?'
    },
]

const FakeChat = () => {
    const [lessionId, setLesstionId] = useState(1)

    useEffect(() => {
        const handleCommentEvent = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lession-${lessionId}`, handleCommentEvent)

        return () => {
            window.removeEventListener(`lession-${lessionId}`, handleCommentEvent)
        }
    }, [lessionId])


    return (
        <div>
            <ul>
            { lessions.map( lession => (
                <li 
                    key={ lession.id }
                    style={ lessionId === lession.id ? {    
                        color: "red", cursor: 'pointer'
                    } : { cursor: 'pointer' }}
                    onClick={ () => setLesstionId(lession.id)}
                >{ lession.name }</li>
            ))}
            </ul>
        </div>    
    )
}

export default FakeChat;