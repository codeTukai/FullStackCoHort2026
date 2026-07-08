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

function auth(req, res, next){
    const token  = req.headers.token
    const decodedToken = jwt.verify(token, JWT_TOKEN)

    const req.user = decodedToken.username

    if (!user) {
        res.status(401, {
            message: "unauthorize"
        })

       

    }

     
     next()
}
// function auth(req, res, next) {
//     const token = req.headers.token;

//     if (!token) {
//         return res.status(401).json({
//             message: "Token missing"
//         });
//     }

//     try {
//         const decodedToken = jwt.verify(token, JWT_TOKEN);

//         req.user = decodedToken.username;

//         next();
//     } catch (err) {
//         return res.status(401).json({
//             message: "Invalid token"
//         });
//     }
// }
app.get('/me',auth, function(req, res){
    // const token = req.headers.token
    // const decodeToken = jwt.verify(token, JWT_TOKEN)

    // const username = decodeToken.username

    const user = users.find(user=>user.username === req.user)

     if (user) {
        return res.status(200).json({
            username: user.username,
            password : user.password
        });
    }

})

app.listen(6000)