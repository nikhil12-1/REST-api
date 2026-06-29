const mongooge=require("mongoose");

const userschema= model.schema(
    name:{type: String, required:true},
    email: {type: String , required:true , unique:true},
    password: {type: String , required:true}
);

module.exports=userschema;