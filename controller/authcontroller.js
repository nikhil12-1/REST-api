const user=require("..model/user.js");

module.exports={
    Login: (req,res)=>{
        try{
            const {email,password}=req.body;
            res.status(200).json({message: login successfullu});
        }catch(error){
            res.status(500).json({error:error.message});
        }
    },
     Login: (req,res)=>{
        try{
            const {name,email,password}=req.body;
            res.status(200).json({message: Register successfullu});
        }catch(error){
            res.status(500).json({error:error.message});
        }
    }
};