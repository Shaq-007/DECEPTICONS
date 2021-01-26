const express = require("express");
const { User, Image } = require("./db/models");

//Set up mongoose connection
require("./db/mongoose");

// add new user to database
exports.create_user = async function (req, res) {
  const newUser = req.body;
  // console.log(req.body)
  const newRecord = {
    username: newUser.username,
    email: newUser.email,
    password: newUser.password,
    userlevel: newUser.userlevel,
  };
  try {
    let response = await User.create(newRecord);
    console.log("User created OK");
    res.status(200).json(response.toJSON());
  } catch (error) {
    // failure
    console.log(`Error: user error: ${error}`);
    if (error.name === "MongoError" && error.code === 11000) {
      // duplicate user and/or email
      console.log("Username or email already used");
      let data = {
        status: 500,
        message: "Username or email already used",
      };
      res.status(500).send(data);
    } else {
      console.log("internal server error");
      res.status(500).json(error);
    }
  }
};

exports.get_users = async function (req, res) {
  // an array of entries is returned
  const userEntries = await User.find();
  if (userEntries != null) {
    console.log(`Success: users found: ${userEntries}`); // success
    res.status(200).json(userEntries);
  } else {
    console.log(`Error: cannot find users: ${userEntries}`); // failure
    res.sendStatus(400);
  }
};

// exports.get_users = async function () {
//   const users = await User.find();
//   return users;
// };

// Display ONE user.
exports.get_oneuser = async function (req, res) {
  console.info("The user id is: ", req.params.userid);
  try {
    const oneuser = await User.findById(req.params.userid);
    if (!oneuser) {
      return res.status(404).send("User does not exist");
    }
    res.send(oneuser);
  } catch (e) {
    res.status(400).send();
  }
};

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

//// To update a document changing userlevel to 4
exports.update_userLevel = async function (req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.userid, req.body, {
      new: true,
    });

    if (!user) {
      return res.status(404).send("User does not exist");
    }
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
};

/// Remove an user
exports.delete_user = async function (req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.userid);
    if (!user) {
      return res.status(404).send("User does not exist");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};

/// Remove a document from Project2 using username not id
// exports.delete_user = async function (req, res) {
//   const user = req.body.username;

//   // delete a single entry
//   const response = await User.deleteOne({ username: user });
//   const result = JSON.stringify(response);

//   if (response.deletedCount != 0) {
//     console.log(`Success: user deleted: ${user}`); // success
//     console.log(`Delete user response: ${result}`);
//     res.status(200).json(response);
//   } else {
//     console.log(`Error: unable to delete user: ${result}`); // failure
//     res.status(500).json(response);
//   }
// };

// IMAGES - GET by CATEGORY
exports.get_image_colors = async function (req, res) {
  const imagesByCategoryColors = await Image.find({
    categoryName: "Colors",
  });
  console.log(imagesByCategoryColors);
  if (imagesByCategoryColors != null) {
    console.log(`success, images found: ${imagesByCategoryColors}`);
    res.status(200).json(imagesByCategoryColors);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};

exports.get_image_animals = async function (req, res) {
  const imagesByCategoryAnimals = await Image.find({
    categoryName: "Animals",
  });
  console.log(imagesByCategoryAnimals);
  if (imagesByCategoryAnimals != null) {
    console.log(`success, images found: ${imagesByCategoryAnimals}`);
    res.status(200).json(imagesByCategoryAnimals);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};

exports.get_image_shapes = async function (req, res) {
  const imagesByCategoryShapes = await Image.find({
    categoryName: "Shapes",
  });
  console.log(imagesByCategoryShapes);
  if (imagesByCategoryShapes != null) {
    console.log(`success, images found: ${imagesByCategoryShapes}`);
    res.status(200).json(imagesByCategoryShapes);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};

exports.get_image_letters = async function (req, res) {
  const imagesByCategoryLetters = await Image.find({
    categoryName: "Letters",
  });
  console.log(imagesByCategoryLetters);
  if (imagesByCategoryLetters != null) {
    console.log(`success, images found: ${imagesByCategoryLetters}`);
    res.status(200).json(imagesByCategoryLetters);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};
