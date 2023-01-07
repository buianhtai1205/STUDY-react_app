import { useRef } from 'react'
import Video from './video'

const PlayVideo = () => {
    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <h1>Play Video</h1>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>    
    )
}

export default PlayVideo