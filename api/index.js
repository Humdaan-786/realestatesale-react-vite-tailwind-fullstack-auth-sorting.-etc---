import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
// code for secure mongodb connection using enviroment var env
dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>{console.log("connected to mongo cloud")})
.catch((err)=>{console.log(err)}) 
const app =express();
app.use(express.json())

app.listen(3000,()=>{
    console.log('Server is running on 3k!!!!')
});


// code for routing apis 

app.use("/api/user",userRouter)
//  when we get /user req we send it to userRouter
// the user router adds for /test route for user sends controller responce in our case user.comtroller.js


app.use("/api/auth",authRouter)