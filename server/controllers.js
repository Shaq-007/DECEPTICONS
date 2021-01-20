const express = require('express');
// const mongoose = require("mongoose");
const { User, Image } = require('./db/models');

// const app = express();
//Set up mongoose connection
require("./db/mongoose");

// app.get('/',(req,res) => {
//     res.send('Hello world!!!');
// });


exports.get_user = async function () {
    const users = await User.find();
    return users
}

exports.get_image_category = async function () {
    const imagesByCategory = await Image
    .find({categoryName:'Colors'});
    console.log(imagesByCategory)
    return imagesByCategory
} 


// app.get('/api/users/:id', async (req,res,next) => {
//     let userid = req.params.id
//     console.info('we are looking up for: ', userid)
//     try{
//         let data = await User.findById(userid);
//         console.info('findById returned',  + data);
//         if (data === null) {
//             throw new Error('User not found')
//         }
//         res.send(data)
//     }
//     catch (error) {
//         res.sendStatus(404)
//     }
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

// module.exports = app;