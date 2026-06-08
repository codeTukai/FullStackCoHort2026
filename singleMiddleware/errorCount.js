import express from 'express'

const app = express()

app.get('/', function(req,res){
    throw new Error("User not found")
    res.status(200).json({
        name: john
    })
})


app.post('/', function (req,res) {
    res.status(200).json({message: "created dummy user"})
})

//err handling middleware

app.use(function (err,req,res,next) {
    res.status(400).json({})
})

app.listen(3000, ()=>{
    console.log('port running on 3000');
})