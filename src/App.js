
import './App.css';
import PostList from "./PostList";
import React , {useState, useRef} from 'react'



function App() {
  const [posts, setPosts]= useState([
  {id:1 ,name:'one',text: 'one one one one one', Likes: 0} , 
  {id:2 ,name:'two',text : 'two two two two two', Likes: 0} , 
  {id:3 ,name:'tri' , text : 'tri tri tri tri tri', Likes: 0} ])

  const postNameRef = useRef()
  const postTextRef = useRef()

  function handleAddTodo(e)
  {
    const name = postNameRef.current.value
    if(name === '') return
    console.log(name)

    const text = postTextRef.current.value
    if(text === '') return
    console.log(text)
    const add = {name , text}


    setPosts(prevPosts => 
      {
        const rand = Math.floor(Math.random() * 100);
        return [ ...prevPosts, {id: rand, name: name, text: text}]
      })

    postNameRef.current.value = null
    postTextRef.current.value = null
  }


 


  return (
    <>
    <div>Subject:</div>
    <div><input ref = {postNameRef} type = "text" /> </div>
    <div> Text:</div>
    <textarea ref = {postTextRef} rows="4" cols="25"></textarea>
    <div></div>
    <button onClick = {handleAddTodo}> Upload Todo !</button>

    <div>---------------------------------------</div>
    <div>
      Todos:
    </div>
    <PostList postList = {posts}/>
    </>
  )
}

export default App;
