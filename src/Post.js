import React , {useState, useRef} from 'react'
import './style.css'
import PostList from './PostList'
import get_product from './App'




export default function Post({post}) {

    

    const [Likes, setLikes]= useState([0])

    

    function handleLike(e)
    {
        post.Likes= post.Likes +1;
        console.log(post.Likes);
        

        setLikes(prevLikes => 
        {
              
            return [post.Likes]
        })
    }

    return (
        <>
        <div class = "post">

            <div class = "formtitle"> Title:</div>
            <div class = "title"> {post.name}</div>
            
            <div class = "formtitle"> Task:</div>
            <div class = "text"> {post.text}</div>
            

            <button onClick = {handleLike}> Like !</button><div class = "text"> {post.Likes}</div>

        </div>
        </>
    )
}



