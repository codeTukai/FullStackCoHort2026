import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.json())

const todos = []

app.post("/addTodo", function(req, res){
    const {todo} = req.body

    todos.push({
        todo: todo
    })

    res.json({
        message: "todo added"
    })
    
})
app.post("/", function(req, res){

})
app.post("/", function(req, res){

})
app.listen(4000, ()=>{
    console.log("port running on 4000");
    
})
