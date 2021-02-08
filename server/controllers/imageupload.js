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
  console.info("the req.body is", req.body);
  var obj = {
    name: req.body.name,
    categoryName: req.body.categoryName,
    img: {
      data: fs.readFileSync(path.join("./uploads/" + req.file.filename)),
      contentType: "image/png",
    },
  };
  // for (i=0; i<6; i++) {
  Image.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // Image.save();
      // res.redirect('/');
      res.status(200).send("image in DB");
    }
  });
  Image.create(obj, (err, item) => {
  });
// }
};

app.use(function (err, req, res, next) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});
