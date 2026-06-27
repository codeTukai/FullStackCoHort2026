import express from 'express'

const app = express()

app.get("/sum", function(req, res){

 const a = parseInt(req.query.a);
 const b = parseInt(req.query.b);

    res.json({
        answer: a + b,
        
    })

    res.send("hii express", answer)
})


app.listen(3000, ()=>{
    console.log("App running on server 3000");
    
}
)