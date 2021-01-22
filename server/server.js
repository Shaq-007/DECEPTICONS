const express = require("express");
// const mongoose = require("mongoose");
// const { User } = require('./db/models');
let controllers = require("./controllers");
const { User } = require("./db/models");
const app = express();
//Set up mongoose connection
// const app = require('./app');
// require("./db/mongoose");

// app.get('/',(req,res) => {
//     res.send('Hello world!!!');
// });
app.use(express.json());

/// api call to create new users
app.post("/api/create", async (req, res) => {
  console.log(req.body);
  const newUser = await controllers.create_user(req, res);
});

// app.post('/api/create',(req, res) => {
//     console.log(req.body)
//     res.send('testing')
// })

/// api call to get all users
app.get("/api/users", async (req, res) => {
  const users = await controllers.get_users();
  if (users != null) {
    // console.log(`success, users found: ${users}`);
    res.status(200).json(users);
  } else {
    console.log("error:cannot find users");
    res.sendStatus(400);
  }
});

app.get("/api/:userid", async (req, res) => {
  console.info("we are looking for user:", req.params.userid);
  let data = await controllers.get_oneuser(req, res);
  res.send(data);
});

//////// this get works but it is not separated 
// app.get("/api/:userid", async (req, res) => {
//     const _id = req.params.userid
//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch ((e) => {
//         res.status(500).send()
//     })
// })





app.patch("/api/update/:id", async (req, res) => {
  console.log(req.body);
  const updateuser = await controllers.update_userLevel(req, res);
  res.send(updateuser);
});

app.delete("/api/delete/:id", async (req,res) => {
  await controllers.delete_user(req,res);
});

app.get("/api/images", async (req, res) => {
  const images = await controllers.get_image_category();
  if (images != null) {
    console.log(`success, images found: ${images}`);
    res.status(200).json(images);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
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
