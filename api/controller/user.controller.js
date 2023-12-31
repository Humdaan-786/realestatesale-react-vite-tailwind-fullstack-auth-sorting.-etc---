import { errorHandler } from "../utils/errors.js"
import bcryptjs from 'bcryptjs'
import User from "../models/user.model.js"
import Listing from "../models/listing.model.js"
export const test =  (req,res)=>{
    res.json({message:'finally working user api route'})
}

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
      return next(errorHandler(401, 'You can only update your own account!'));
    try {
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
  
      const { password, ...rest } = updatedUser._doc;
  
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
}


export const deleteUser=async(req,res,next)=>{
//check token
//req.user.id is the id obtained from jwt from cloud after passing in secret key to mongocloud
//collected from verify user
//req.params.id is the id of the user from local storage of logged in user
if(req.user.id!==req.params.id){
  return next(errorHandler(401,"U can only delete your own account"))
}
//deleting user or  throw error
try {
  //mongoose function to delete id
  await User.findByIdAndDelete(req.params.id)
  res.clearCookie('access_token');
  res.status(200).json("User has been deleted");
} catch (error) {
  next(error);
}
};


export const getUserListings = async (req,res,next)=>{
if(req.user.id===req.params.id){
try {
  const Listings = await Listing.find({userRef:req.params.id});
  res.status(200).json(Listings);
} 
catch (error) {
  next(error)
}
}
else{
return next(errorHandler(401,'You can create ypurnown listings'))
}
  
};