import express from 'express'

const app = express()

app.get("/sum", function(req, res){

 const a = req.query.a;
 const b = req.query.b

    res.json({
        ans: a+b,
        
    })

    res.send("hii express", sum)
})
app.get("/multiply", function(req, res){

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        
        ans: a * b,
        
    })
})
app.get("/subtract", function(req, res){


    res.send("hii express")
})
app.get("/division", function(req, res){


    res.send("hii express")
})

app.listen(3000, ()=>{
    console.log("App running on server 3000");
    
}
)