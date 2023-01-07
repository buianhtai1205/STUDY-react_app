import { forwardRef, useImperativeHandle, useRef } from 'react';
import video from '../../videos/video-1.mp4';

const Video = (props, ref) => {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            src={video}
            width="300px"
        ></video>    
    )
}

export default forwardRef(Video)