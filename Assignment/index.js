import express from 'express'

const app = express()

app.get("/", function(req, res){
    let a;
    let b;
    
    res.send("hii express")
})

app.listen(3000, ()=>{
    console.log("App running on server 3000");
    
}
)