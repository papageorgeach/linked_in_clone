const express = require('express');
const cors = require('cors');
const mysql = require('mysql')

const SELECT_ALL_POSTS_QUERY = 'SELECT * FROM posts';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database:'linkedin'
});

console.log(connection)

connection.connect(err => {
  if(err){
    return err;
  }
});


const app = express();

app.use(cors());



app.get('/',(req,res) => 
{
    res.send('hello from ssdddccdds')
});



app.get('/posts', (req , res) =>{
  connection.query(SELECT_ALL_POSTS_QUERY, (err, results)=>{
    if(err){
      return require.send(err)
    }
    else{
      return res.json({
        data: results
      })
    }
  })
});

/*http://localhost:4000/add?Title=tt&Text=fghghf&Likes=0*/

app.get('/add',(req,res)=>{
  const {title , text, likes} =req.query;
  
  const INSERT_POST_QUERY = 'INSERT INTO posts(Title,Text,Likes) VALUES (?,?,?)';

  console.log(title)
  console.log(text)
  console.log(likes)


  connection.query(INSERT_POST_QUERY,[title ,text, likes], (err,results)=>{
    if(err){
      //return res.send('failllll !')
      return res.send(err)
    }
    else
    {
      return res.send('successssssss !')
    }
  });

});

app.listen(4000,() => 
{
  console.log('Pro ser lisening');
});