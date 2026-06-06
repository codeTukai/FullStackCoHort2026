import express from 'express'

const app = express()


function ageCountMax(req,res,next){
    const age = req.query.age
    if(age >= 23){
        next()
    }else{
        res.status(411).json({
            msg: "you are not eligible for this ride"
        })
    }
}

app.get('/ride1',ageCountMax, function(req,res){
        res.json({
            msg: "welcome to your first ride"
        })
  
})
app.get('/ride2',ageCountMax, function(req,res){
      res.json({
            msg: "welcome to your first ride because of you are above 22"
        })
    
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`port running on ${PORT}`);
    
})