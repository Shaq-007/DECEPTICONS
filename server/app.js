const express = require('express');
const indexRouter = require('./routes/index');

// const app = express()

// var fs = require('fs');
// const { User, Image } = require("./db/models");

//Set up mongoose connection
// require("./db/mongoose");

app.use('/api', indexRouter);


// export async function createUser() { 
//     const user = new User({
//         username: 'user3',
//         email: 'user3@abc.com',
//         password: 'whddjsshdhsd',
//         userlevel: 10,
//     })
// /// saving the user into the database
//     const result = await user.save();
//     console.log(result);
// }
// // createUser();

// export async function getUsers() {
//     // const users = await User
//     // .find({username:'user3', userlevel:10});
//     // console.log(users)
//     const users = await User.find();
//     if (users != null) {
//         console.log(`succes, users found: ${users}`);
//         res.status(200).json(users);
//     } else {
//         console.log('error:cannot find users');
//         res.sendStatus(400)
//     }

// }
// // getUsers()

// export async function getImagesByCategory() {
//     const imagesByCategory = await Image
//     .find({categoryName:'Colors'});
//     console.log(imagesByCategory)
// }
// getImagesByCategory()

// //// To update a document changing userlevel to 4
// export async function updateUser(id){
//     const user = await User.findById(id);
//     if(!user) return console.log('user does not exist');

//     user.username= 'user3';
//     const result = await user.save();
//     console.log(result);
// }
// // updateUser('60020568999aa323fcf1c275')

// /// Remove a document

// export async function removeUser(id){
//     const user = await User.findByIdAndRemove(id);
//     console.log(user);
// }
// removeUser('600105e8d92e34612c5d0371')

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;