const custom=require("..model/customer.js");

member.export={
    display:(req,res)=>{
        try{
            const customers=await custom.find();
            res.status(200).json({message: customers});
        }catch(error){
            res.status(500).json({error:error.message});
        }
    },
    create:(req,res)=>{
        try{
            const create_customer=await custom.create(req.body);
            res.status(200).json({message: create_customer});
        }catch(error){
            res.status(500).json({error:error.message});
        }
    },
    update:(req,res)=>{
        try{
            const update_customer=await custom.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).json({message: update_customer});
        }catch(error){
            res.status(500).json({error:error.message});
        }
    },
    find:(req,res)=>{
        try{
            const find_customer=await custom.find(req.params.id);
            res.status(200).json({message: find_customer});
        }catch(error){
            res.status(500).json({error:error.message});
        }
    },
    delete:(req,res)=>{
        try{
            const delete_customer= custom.find();
            res.status(200).json({data: delete_customer,message:"deleted successfully"});
        }catch(error){
            res.status(500).json({error:error.message});
        }
    }
};