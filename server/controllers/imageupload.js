var express = require("express");
var fs = require("fs");
var path = require("path");
var app = express();
const { Image } = require("../db/models");

app.use(express.json());

// Step 8: Handling the POST request
//Uploading the image

exports.post_image_custom = async function (req, res, next) {
  console.info("the req.files is", req.files);
  console.info("the req.body.email is", req.body.email);
  console.info("the req.body.resizeImages is", req.body.resizeImages);
  for (const filename of req.body.resizeImages) {
    var obj = {
      email: req.body.email,
      categoryName: "custom",
      img: {
        data: fs.readFileSync(path.join(filename)),
        contentType: "image/png",
      },
    };
    Image.create(obj, (err, item) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
    });
    Image.create(obj, (err, item) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
    });
  }
  // res.status(200).send("image in DB");
  next();
};

//Resizing images
const sharp = require("sharp");

exports.resizeImages = async (req, res, next) => {
  console.log("this is req.files on imageUpload", req.files);
  if (!req.files) return next();
  req.body.resizeImages = [];
  await Promise.all(
    req.files.map(async (file) => {
      try {
        const newFilename = `uploadResize/${file.filename}-${Date.now()}.jpeg`;
        console.log(" the buffer", file.buffer);

        await sharp(file.path)
          .resize(200, 200, { fit: "inside" })
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(`${newFilename}`);
        console.log("this is newfile", newFilename);
        req.body.resizeImages.push(newFilename);
      } catch (err) {
        console.log("this is the exception", err.message);
      }
    })
  );

  next();
};

exports.getResult = async (req, res) => {
  if (req.body.resizeImages.length <= 0) {
    return res.send(`You must select at least 1 image.`);
  }

  const images = req.body.resizeImages.map((image) => "" + image + "").join("");

  return res.send(`Images were uploaded:${images}`);
};

app.use(function (err, req, res, next) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});
