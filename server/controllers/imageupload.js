var express = require("express");
var fs = require("fs");
var path = require("path");
var app = express();
const { Image } = require("../db/models");

app.use(express.json());

// require('./db/mongoose')

// Step 8: Handling the POST request
//Uploading the image

exports.post_image_custom = async function (req, res, next) {
  console.info("the req.files is", req.files);
  console.info("the req.body.email is", req.body.email)
  for (const file of req.files){
    var obj = {
      email: req.body.email,
      categoryName: req.body.categoryName,
      img: {
        data: fs.readFileSync(path.join("./uploads/" + file.filename)),
        contentType: "image/png",
      },
    };
    Image.create(obj, (err, item) => {
      if (err) {
        console.log(err);
        res.status(400).send(err)
      } 
    });
    Image.create(obj, (err, item) => {
      if (err) {
        console.log(err);
        res.status(400).send(err)
      }
    });
  }
  res.status(200).send("image in DB");
};

app.use(function (err, req, res, next) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});
