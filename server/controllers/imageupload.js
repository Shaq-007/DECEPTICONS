var express = require("express");
var fs = require("fs");
var path = require("path");
var app = express();
const { Image } = require("../db/models");

app.use(express.json());

// require('./db/mongoose')

/// Step 6  load the model into app.js
// var imgModel = require('./db/models');

// Step 7:  handle our post and get requests to our database
// Retriving the image
// app.get('/', (req, res) => {
// 	Image.find({}, (err, items) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			res.render('app', { items: items });
// 		}
// 	});
// });

// Step 8: Handling the POST request
//Uploading the image

exports.get_image_custom = async function (req, res, next) {
  console.info("the req.body is", req.body);
  console.log("the req.file is:", req.file);
  var obj = {
    name: req.body.name,
    // desc: req.body.desc,
    categoryName: req.body.category,
    img: {
      data: fs.readFileSync(path.join("./uploads/" + req.file.filename)),
      contentType: "image/png",
    },
  };
  Image.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      // res.redirect('/');
      res.status(200).send("image in DB");
    }
  });
};

app.use(function (err, req, res, next) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});
