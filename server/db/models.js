const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema (
    {
        username:{
            type: String,
            required: true,
            trim:true,
            unique:true,
            validate(value) {
                if(value.length > 20) {
                    throw new Error("Username must be less than 20 characters long");
                }
            },
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique:true,
            validate(value) {
                if(!validator.isEmail(value)){
                    throw new Error("invalid email entered")
                }
            },
        },
        password: {
            type: String,
            required:true,
        },
        userlevel: {
            type:Number,
        },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", userSchema);


// const ImageSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });
 
// //Image is a model which has a schema imageSchema
// const Image = mongoose.model('Image',ImageSchema);



module.exports = { User, CategoryAnimal };