import { useEffect, useState } from "react"

// 1. useEffect(callback)
// - Gọi callback mỗi jhi component re-reder
// - GỌi sau khi component được thêm vào DOM - gọi sau render
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần khi component mounted
// 3. useEffect(callback, [deps])
// - Callback chỉ được gọi lại mỗi khi deps thay đổi

// ---------
// 1. callback luôn được gọi sau khi component mounted

const tabs = ['posts', 'comments', 'albums']

const Content = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [albums, setAlbums] = useState([])
    const [choice, setChoice] = useState('posts')
    

    useEffect(() => {
        document.title = title
    })

    // useEffect(() => {
    //     // call API
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts)
    //         })
    // }, [])

    useEffect(() => {
        let apiURL = "https://jsonplaceholder.typicode.com/" + choice
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (choice === 'posts')
                    setPosts(data)
                if (choice === 'comments')
                    setComments(data)
                if (choice === 'albums')
                    setAlbums(data)
            })
        console.log(">> call me api")

    }, [choice])

    return (
        <div>
            <h1>Mounted & Unmounted</h1>
            { tabs.map(tab => (
                <button 
                    key={ tab } 
                    onClick={ () => setChoice(tab) }
                    style={ tab === choice ? { color: '#fff', background: '#000'} : {}}
                >
                        { tab }
                </button>
            ))}
            <input 
                type="text"
                onChange={ (event) => setTitle(event.target.value) }
                value={ title }
            />
            <ul>
                { choice === 'posts' && posts.map((post) => (
                    <li key={ post.id }>{ post.title }</li>
                ))}

                { choice === 'comments' && comments.map((comment) => (
                    <li key={ comment.id }>{ comment.name }</li>
                ))}

                { choice === 'albums' && albums.map((album) => (
                    <li key={ album.id }>{ album.title }</li>
                ))}
            </ul>
        </div>    
    )
}

export default Content