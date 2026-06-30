import express from 'express'

const app = express()
//add in middleware http method, url, timestamps

function middleware(req, res, next){
    console.log("Http method: ", req.method);
    console.log(req.url);
    console.log(Date.now());
    
    next()
}

app.use(middleware)

app.get("/sum", function(req,res){

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json(
      
        {
            msg: a + b
        }
    )
})

app.post("/multiply", function(req, res){
    const a = req.body.a
    const b = req.body.b

    res.json({
        msg : a * b
    })
})
app.get("/divide", function(req, res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        msg : a / b
    })
})

app.listen(3000, ()=>{
    console.log("port will be running 3000");
    
})