
// var colors = require('colors');

// console.log("hello".red);
// console.log("hi".green);
// console.log("hi".green);

//  const http = require('http');
const data = [
    {id:1,age:10,city:"bengaluru"},
    {id:2,age:20,city:"bengau"},
    {id:3,age:30,city:"benguru"},
    {id:4,age:40,city:"buru"}
    
];


 
const http = require('http');
http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  

    
    res.write(JSON.stringify(data));
    res.end();
    
    
    }
    ).listen(6550);
// const PORT = 6500;


  //program to create rest api

//   const express  = require("express");
//   const data =require("./MOCK_DATA.json");
//   const app = express();
//   const fs = require("fs").writeFile;
//   app.use(express.urlencoded({extended:false}));
//   const port = 8000;
//   app.get('/api/users',(req,res)=>{
//     return res.json(data);

//   })
//   app.get('/users',(req,res)=>{
//    const html =
//     `
//    <ul>
//    ${data.map((d)=>`<li>${d.first_name}</li>`)}
// </ul>
//    `;
//    res.send(html)
//   })
//   app.get('/api/users/:id',(req,res)=>{
    
//     const id =Number(req.params.id);
//     const user = data.find(data=>data.id===id);
//     return res.json(user);

//   })
//   app.post('/api/users',(req,res)=>{
//     const body  = req.body;
//     //data.push({...body,id: data.length +1});
//     console.log("body",body);
// return res.json({status:"pending"})
//     // fs('./MOCK_DATA.json',JSON.stringify(data),(err,any)=>{
//     //     return res.json({status:"all done"})
//     // });



    
    

//   })
// app.listen(port,()=>console.log(`server name is: localhost:${port}`));





// res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers





// console.log(process.argv[3]);
// const path = require('path');
// const cors = require('cors');
// const express = require('express');
// const app =  express();
// app.use(express.json());
// app.use(cors());
// app.get('/post',(req,res)=>{
    
//     console.log('data sent by browser is ',req.query);
//     res.send(JSON.stringify(data));


   
    

// });


// app.get('/about',(req,res)=>{
//     res.send("hello this is about page");
    

// });

// app.get('/help',(req,res)=>{
//     res.send("hello this is help page");
    

// });

// app.get('/home',(req,res)=>{
   
//     res.send('<h1> welcome to home</h1><a href="/about" >go to about</a>');


   
    

// });

// app.get('/about',(req,res)=>{
    
//     res.send('<h1> welcome to about</h1><a href="/home" >go to home</a>');


// });

//app.listen(4500);




//const path = require('path');

// const express = require('express');

// const app =  express();
// app.set('view engine','ejs');

 //const publicpath = path.join(__dirname,'public');

// app.use(express.static(publicpath));
//  app.get('',(req,res)=>{
//     res.sendFile(`${publicpath}/index.html`);
    

// });
//  app.get('/profile',(_,res)=>{
//      const info = {
//          name:'jk',
//          email:'jk@gmail.com',
//          subs:['math','eng','kan','sans']
//      }
//      res.render('profile',{info});
//  });

//  app.get('/login',(_,res)=>{
   
//     res.render('login');
// });
// app.get('/help',(req,res)=>{
//     res.sendFile(`${publicpath}/help.html`);
    

// });
//  app.get('/about',(req,res)=>{
//          res.sendFile(`${publicpath}/about.html`);
        
    
//      });
    // app.get('*',(req,res)=>{
    //     res.sendFile(`${publicpath}/nopage.html`);
        
    
    // });


//app.listen(2500);


// const { MongoClient } = require('mongodb');
// const URL = "mongodb://localhost:27017";
// const database = "college";
// const client = new MongoClient(URL);

//  async function getdata(){
//     let res =  await client.connect();
//    let condb =   res.db(database);
//    let collection = condb.collection('students');
//    let response = await collection.find({}).toArray();
//    console.log(response);
// }
// getdata();
// const express = require("express");
// const app = express();

// const mysql = require('mysql2');
// const con = mysql.createConnection({
//     host:'127.0.0.1',
//     user:'root',
//     password:'jk@karunadu01',
//     database:'pk'
    
// });
// con.connect((err)=>{
//     if(err){
//         console.warn("not connected");
//     }
//     else{
//         console.warn("conected");
//     }
// });



