import jwt from 'jsonwebtoken'

const SECRET = "dontbehack"

const value = {
    username: "Tukai Ghosh",
    account : "2345345"
}

// const token = jwt.sign(
//     {
//     value
// },
// SECRET)
// console.log(token);

// const generateToken = jwt.sign(value, "Hackatthon")
const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlR1a2FpIEdob3NoIiwiYWNjb3VudCI6IjIzNDUzNDUiLCJpYXQiOjE3ODM2NTkwNDB9.UpYOO6xBXfYlxvlDEvS5NzV2YrFugvuoWzViBkRLwZM", "Hackatthon")
// console.log(generateToken);
console.log(verifyToken);


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlR1a2FpIEdob3NoIiwiYWNjb3VudCI6IjIzNDUzNDUiLCJpYXQiOjE3ODM2NTg0OTF9.UCPED4Pa2JvQPiOm_lyH5Rt3k4l7XLTfP0s2IJI_6LU
