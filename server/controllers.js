const express = require('express');
// const mongoose = require("mongoose");
const { User } = require('./db/models');

// const app = express();
//Set up mongoose connection
require("./db/mongoose");

// app.get('/',(req,res) => {
//     res.send('Hello world!!!');
// });


exports.get_user = async function (req,res) {
    const users = await User.find();
    return users
}

// app.get('/api/users', async (req,res) => {
    // const users = await User.find();
    // if (users != null) {
    //     console.log(`succes, users found: ${users}`);
    //     res.status(200).json(users);
    // } else {
    //     console.log('error:cannot find users');
    //     res.sendStatus(400)
    // getUsers()
    // }
// });

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