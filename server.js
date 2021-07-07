const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hey This is my first App on Express");
});

app.get('/api/course', (req, res) => {
    res.send(["1. Node.js", "2. Express.js", "3. JavaScript ES6"]);
});

app.get('/api/posts/:year/:month', (req, res) =>{
    res.send(req.params);
});

// Below is how we can use querry Parameter: 

app.get('/api/posts/:year/:month', (req, res) =>{
    res.send(req.query);
});

app.listen(2000, ()=>{
    console.log("server is running on port 2000....");
});