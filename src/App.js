
import './App.css';
import PostList from "./PostList";

import React , {useState, useRef} from 'react'
import { BrowserRouter as Router,Link , NavLink, Switch, Route } from 'react-router-dom'





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


    var st = 'http://localhost:4000/add'  +'?title=' +  name + '&text=' + text + '&likes=0';
    console.log(st);
    fetch(st)
    .catch(err =>console.error(err))
    postNameRef.current.value = null
    postTextRef.current.value = null

    get_products();
  }


  function get_products(e) {
		fetch('http://localhost:4000/posts')  
		.then(response => response.json())
		.then(({data})=> {
			console.log(data)

			var i
			//storing previous ids
			var ids =[] 
			for (let i = 0; i < posts.length; i++){
				ids[i]=posts[i].id
				console.log(ids[i])
			}

			for (let i = 0; i < data.length; i++){
				if (ids.includes(data[i].id)) {
					console.log('cont')
					continue;
				}
				setPosts(prevPosts => 
      			{
        			console.log(data[i].Likes)
        			return [ ...prevPosts, {id: data[i].id, name: data[i].Title, text: data[i].Text, Likes: data[i].Likes}]
      			})
			}
		})
		.catch(err =>console.error(err))
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
      Posts:


      
    </div>
    <PostList postList = {posts}/>
    
    </>
  )
}

export default App;
