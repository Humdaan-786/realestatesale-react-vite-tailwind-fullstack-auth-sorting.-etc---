//verify token from cookie we will install another parcel npm cookie-parser
//cookie parcer should be initialised in index.js
import { errorHandler } from "./errors.js";
import jwt from 'jsonwebtoken'
export const verifyToken = (req,res,next)=>{
const token =req.cookies.access_token;

if(!token){next(errorHandler(401,'Invalid access token or Unauthorized'))}
jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err)return next(errorHandler(403,'some error'))
    req.user=user;
    next();

})

}