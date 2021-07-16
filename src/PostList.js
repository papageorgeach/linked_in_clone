import React from 'react'
import Post from './Post';
export default function PostList({postList}) {
    return (
        postList.map(post => {
                return <Post key = {post.id} post={post} />
            })  
    )
}
