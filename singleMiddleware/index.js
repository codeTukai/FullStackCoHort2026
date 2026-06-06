import express from 'express'

const app = express()

function ageCount(age){
    if(age >= 18){
        return true
    }else{
        return false
    }
}
function ageCountMax(age){
    if(age >= 23){
        return true
    }else{
        return false
    }
}

app.get('/ride1', function(req,res){
    if (ageCount(req.query.age)) {
        res.json({
            msg: "welcome to your first ride"
        })
    }else{
        res.status(411).json({
            msg: "you are not eligible for this ride"
        })
    }
})
app.get('/ride2', function(req,res){
    if (ageCountMax(req.query.age)) {
        res.json({
            msg: "welcome to your first ride because of you are above 22"
        })
    }else{
        res.status(411).json({
            msg: "you are not eligible for this ride "
        })
    }
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`port running on ${PORT}`);
    
})