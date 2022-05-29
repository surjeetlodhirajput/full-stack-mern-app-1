import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    Name:{type:String,require:true},
    Email:{type:String,require:true},
    ContactNumber:{type:Number,require:true},
    CourseLevel:{type:String,require:true},
    Country:{type:String,require:true},
    DOB:{type:Date,default:Date.now}
})

const User=mongoose.model('User',UserSchema);

export default User;