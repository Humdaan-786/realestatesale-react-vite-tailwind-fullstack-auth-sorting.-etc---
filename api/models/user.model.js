
import mongoose from "mongoose"
// creating rules
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,   
    },
    email:{
        type:String,
        required:true,
        unique:true,   
    },
    password:{
        type:String,
        required:true,
         
    },
    avatar:{
        type:String,
        default:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
    }
    },
    {
        timestamps:true
    });
    
//mogdb adds auto s i.e users
const User = mongoose.model('User',userSchema);
export default User;