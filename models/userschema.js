const mongoose =require("mongoose")



 const userschema = mongoose .Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },


})

module.export = mongoose.model('user',userschema);