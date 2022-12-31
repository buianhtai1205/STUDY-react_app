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
// 2. Clean up function luôn đc gọi trước khi component unmounted

const tabs = ['posts', 'comments', 'albums']

const Content = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [albums, setAlbums] = useState([])
    const [choice, setChoice] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)    
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        document.title = title
        console.log(">>call me")
    }, [title])

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

    useEffect(() => {

        const handleScrollEvent = () => {
            console.log(window.scrollY)
            setShowGoToTop(window.scrollY >= 200)
        }
        
        window.addEventListener('scroll', handleScrollEvent)
        console.log('addEvent')

        //clean up funtion
        return () => {
            console.log(">> unmounting")
            window.removeEventListener('scroll', handleScrollEvent)
            console.log('removeEvent')
        }
    }, [])

    useEffect(() => {
        const handleResizeEvent = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResizeEvent)

        return () => {
            window.removeEventListener('resize', handleResizeEvent)
        }
    })

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <h1>Mounted & Unmounted { width }</h1>
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
            { showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                        width: 50,  
                        height: 50,
                        borderRadius: '50%'
                    }}
                    onClick={ topFunction }
                >Top</button>    
            )}
        </div>    
    )
}

export default Content