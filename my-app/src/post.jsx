import React, { useEffect, useRef, useState } from 'react'
import { Table } from 'antd';
import Search from './search';
import Sort from './sort';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const storage = useRef([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(resp => resp.json())
            .then((data) => {
                setPosts(data)
                storage.current = data
            })
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'name',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Quantity Per Unit',
            dataIndex: 'quantityperunit',
            key: 'quantityperunit',
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
            key: 'unitPrice',
            sorter: (a, b) => a.unitPrice - b.unitPrice,
        },
    ];
    return (
        <>
            <Search storage={storage} setPosts={setPosts} />
            <Sort posts={posts} setPosts={setPosts} />
            <Table columns={columns} dataSource={posts} />

        </> 
    )
}

export default Posts