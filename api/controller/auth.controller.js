import User from '../models/user.model.js' 
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { errorHandler } from '../utils/errors.js'
export const signup = async (req,res,next)=>{
    console.log(req.body)
    const{username,email,password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser= new User({username,email, password:hashedPassword});
    try {
        await newUser.save()
    res.status(201).json("user created succesfully")
    } catch (error) {
        // res.status(500).json(error.message);
        // next(errorHandler(550,'error from funct'));
        next(error);
    }
}

export const signin = async (req,res,next)=>{
    const{email,password}=req.body;
   
    try {
        const validUser = await User.findOne({email});
        if (!validUser){ return next(errorHandler(404,'User not found!'))};
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if (!validPassword) { return next(errorHandler(404,'Password Incorrect'))}
        //creating webtoken that is secure for login
        const token =jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:pass, ...rest }=validUser;
        res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(rest);

    } catch (error) {
        next(error);
    }
}