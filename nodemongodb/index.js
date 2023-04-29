const express = require('express');
const dbConnect = require('./utils/dbconfig');
const router = require('./routes/todo');


const app = express();

//json body parsing
app.use(express.json())


app.get('/', (req,res)=>{
    console.log(req.body);
    res.send({msg:"done"})
})

//to acces the todo resources we postfix the root url with this
app.use("/todos", router)

//database connection
dbConnect("mongodb://localhost:27017/todos" )

app.listen(process.env.PORT || 9009, ()=>{
    console.log("Server started");
})