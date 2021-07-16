import React , {useState, useRef} from 'react'
import './style.css'
import PostList from './PostList'




export default function Post({post}) {

  
    function handleLike(e)
    {
        post.Likes= post.Likes +1;
        console.log(post.Likes);

        
    }

    return (
        <div class = "post">

            <div class = "formtitle"> Title:</div>
            <div class = "title"> {post.name}</div>
            
            <div class = "formtitle"> Task:</div>
            <div class = "text"> {post.text}</div>

            <button onClick = {handleLike}> Like !</button><div class = "text"> {post.Likes}</div>

        </div>
    )
}
