import express from 'express'
const app = express()

let reqCount = 0;

app.use(function(req,res,next){
    reqCount = reqCount + 1
    next();
})

app.get('/', function(req,res){
    res.status(200).json(
        {
            name: "john"
        }
    );
});
app.get('/req', function(req,res){
    res.status(200).json(
        {
            reqCount
        }
    );
});
app.listen(3000,()=>{
    console.log("port running on 3000");
    
})