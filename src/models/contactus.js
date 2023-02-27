// const mongoose = require("mongoose")
// const validator = require("validator");

// const contact  = mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         minLength:3
//     },
//     email:{
//         type:String,
//         required:true,
//         validator(value){
//             if(!validator.isEmail(value))
//             {
//                 throw new Error("Invalid email id")
//             }
//         }
//     },
//     message:{
//         type:String,
//         required:true,
//         minLength:3
//     }
// });

// module.exports=mongoose.model("contactu",contact)