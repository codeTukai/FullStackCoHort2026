import express from 'express'

const app = express()
let numberOfReqForUser = {};

setInterval(()=>{
    numberOfReqForUser = {}
},1000)

app.use(function(req,res,next){
    const userId = req.headers["user-id"];
  
    if (numberOfReqForUser[userId]) {
        numberOfReqForUser[userId] + 1;
        if(numberOfReqForUser[userId] > 5){
            res.status(404).json({
                message: "un Authorize"
            })

        }
            next();
        
    }else{
        numberOfReqForUser[userId] = numberOfReqForUser[userId] + 1;
        next()
    }
})

app.get('/', function(req,res){
    res.json({
        numberOfReqForUser
    });
})

app.listen(3000, ()=>{
    console.log("port running on 3000");
})

