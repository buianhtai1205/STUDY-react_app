import { useEffect, useState } from "react"

const Avatar = () => {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        
        //clean up
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (event) => {
        const file = event.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
        event.target.value = null
    }

    return (
        <div>
            <h1>SetAvatar</h1>
            <input 
                type="file"
                onChange={ handlePreviewAvatar }
            />
            { avatar && (
                <img src={ avatar.preview} alt="avatar" width="60%"/>    
            )}
        </div>    
    )
}

export default Avatar;