import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
const JWT_TOKEN = "HiiTukaiGhosh"
app.use(express.json())

const users = []

app.post('/signup', function(req, res){
    const {username, password} = req.body
    

     users.push(
        {
            username: username,
            password: password
        }
     )

     res.json({
        message: "sign up done",

     })

})
app.post('/sign-in', function(req, res){
    const {username, password} = req.body

    const user = users.find(user => user.username === username && user.password === password)

    if (!user) {
        res.json(
           { message: "unauthorize"}
        )
    }

    const token = jwt.sign(
        {
            username: username
        },
        JWT_TOKEN
    )

     

      res.json({
        success: true,
        message: "Login Successful",
        token: token
    });


})
app.get('/me', function(req, res){
    const token = req.headers.token
    const decodeToken = jwt.verify(token, JWT_TOKEN)

    const username = decodeToken.username

    const user = users.find(user=>user.username === username)

     if (user) {
        return res.status(200).json({
            username: user.username,
            password : user.password
        });
    }

})

app.listen(6000)