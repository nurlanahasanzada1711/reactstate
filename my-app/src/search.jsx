import { Input } from 'antd'
import React from 'react'

export default function Search({ storage, setPosts }) {
    const handleSearch = (e) => {
        const filteredPosts = storage.current.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setPosts(filteredPosts)
    }
}
return (
    <Input
        placeholder="Basic usage"
        onChange={(e) => handleSearch(e)}
    />
)
