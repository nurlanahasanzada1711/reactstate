import React, { useState } from 'react'

export default function Sort({ posts, setPosts }) {
    const [desc, setDesc] = useState(true)

    const handleSort = () => {
        let sortedPosts

        if (desc) {
            sortedPosts = posts.sort((a, b) => a.name.localCompare(b.name))
        }
        else {
            sortedPosts = posts.sort((a, b) => b.name.localCompare(a.name))

        }
        setPosts([...sortedPosts])
        setDesc(!desc)

    }
    return (
        <>
            <button onClick={handleSort}>Sort</button>
        </>
    )
}

