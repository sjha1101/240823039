const express = require("express");
const app = express();
const port=3000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello");
});

//to store data
app.get("/show/:id",(req,res)=>{
    res.send(`hello,student: \n ID: ${req.params.id}`);
});

//to insert data    
app.post("/store",(req,res)=>{
    res.send(`Data stored successfully\n ${req.body.name}${req.body.city}`);
});

//to update
app.put("/update/:id",(req,res)=>{
    res.send(`Data updated successfully\n ${req.body.name}${req.body.city}`);
});

//to delete
app.delete("/delete/:id",(req,res)=>{
    res.send(`Data deleted ${req.params.id}`);
})

app.listen(port,()=>{
    console.log('server is running at http://localhost:80')
})