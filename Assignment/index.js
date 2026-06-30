import express from 'express'

const app = express()
let reqCount = 0;

function requestIncreaser(){
     reqCount = reqCount + 1;
    console.log("number of request count = " + requestCount);
    
}

app.get("/sum", function(req, res){

   
requestIncreaser()
 const a = parseInt(req.query.a);
 const b = parseInt(req.query.b);

    res.json({
        answer: a + b,
        
    })

    
})

app.get("/multiply", function (req,res) {

     
    const a = req.query.a;
    const b = req.query.b;


    res.json({
        answer : a * b
    })
})
app.get("/sub", function (req,res) {

    requestIncreaser()
    const a = req.query.a;
    const b = req.query.b;


    res.json({
        answer : a - b
    })
})
app.get("/divide", function (req,res) {
    const a = req.query.a;
    const b = req.query.b;


    res.json({
        answer : a / b
    })
})



app.listen(3000, ()=>{
    console.log("App running on server 3000");
    
}
)