const express = require('express');
// const mongoose = require("mongoose");
// const { User } = require('./db/models');
let user_controller = require('./controllers')
const app = express();
//Set up mongoose connection
// const app = require('./app');
// require("./db/mongoose");

// app.get('/',(req,res) => {
//     res.send('Hello world!!!');
// });


app.get('/api/users', async (req,res) => {
    const users = user_controller.get_user()
    if (users != null) {
        console.log(`succes, users found: ${users}`);
        res.status(200).json(users);
    } else {
        console.log('error:cannot find users');
        res.sendStatus(400)
    }
});

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
