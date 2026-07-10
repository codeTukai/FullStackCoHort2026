import jwt from 'jsonwebtoken'
import zod from 'zod'
const SECRET = "CHAIAURCODE"

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(6)

function jwtSign(username, password){
    const responseUsername = usernameSchema.safeParse(username)
    const responsePassword = passwordSchema.safeParse(password)
    if(!responseUsername.success || !responsePassword.success){
        return null
    }
    const token = jwt.sign(
        {username},
    SECRET
    )

    return token
}

function jwtVerify(token){
    const verify = jwt.verify(token, SECRET)
    if (verify) {
        return true
    }else{
        return false
    }
}
console.log(jwtVerify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1a2FpQGdtYWlsLmNvbSIsImlhdCI6MTc4MzY2NDI4NX0.aeNH8G5R5pJaieBhwjzZmp1mbpmMDkTYaYtRBQPHNxk"))
 

// const value = jwtSign("tukai@gmail.com", "123456")

// console.log(value);