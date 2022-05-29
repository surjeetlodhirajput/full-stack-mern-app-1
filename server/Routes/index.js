import express from "express";
import middleware from "../MiddleWare/index.js";
import User from "../database/index.js";
const router=express.Router();

router.get('/:email',(req,res)=>{
    const {email}=req.params;
User.findOne({Email:email},(err,result)=>{
if(result==null){
res.status(404).json({"error":"Record not Found"});
}
else{
    res.status(201).json(result);
}
})

});

router.post('/',middleware,(req,res)=>{
const {Name,Email,ContactNumber,CourseLevel,Country,DOB}=req.body;
User.findOne({Email:Email},async(err,result)=>{
    if(result==null){
        const newUser=await new User({Name,Email,ContactNumber,Country,DOB});
        try{
           await   newUser.save();
           res.status(201).json({"success":"user added succssefuly"});
          }
       catch(error){
               res.status(409).json({error:error.message});
                   }
            }
    else{
            User.findOneAndUpdate({'Email':Email},{Name,Email,ContactNumber,Country,DOB},{upsert:true},function(err, doc) {
                if (err) res.status(409).json({"error":"Not Saved"});
                res.status(201).json({"success":"Updated Successfully"});

        })
    }
})
})

export default router;