const express = require("express");
const { Image, User } = require("../db/models");

// IMAGES - GET by CATEGORY

exports.get_images = async function (req, res) {
  console.log("categoryName in get_images fucntion", req.params);
  const imagesByCategoryCustom = await Image.find({
    categoryName: req.params.categoryName,
  });
  // console.log(imagesByCategoryCustom);
  if (imagesByCategoryCustom != null) {
    // console.log(`success, images found: ${imagesByCategoryCustom}`);
    console.log(`success, images found: ${imagesByCategoryCustom.length}`);
    res.status(200).json(imagesByCategoryCustom);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};

exports.get_image_custom = async function (req, res) {
  console.log("Email in custom function", req.params);
  // if (token === user.token) {


  const imagesByCategoryCustom = await Image.find({
    email: req.params.email,
  });
  // console.log(imagesByCategoryCustom);
  if (imagesByCategoryCustom != null) {
    // console.log(`success, images found: ${imagesByCategoryCustom}`);
    console.log(`success, images found: ${imagesByCategoryCustom.length}`);
    if (imagesByCategoryCustom.length === 12) {
      res.status(200).json(imagesByCategoryCustom);
    } else if (imagesByCategoryCustom.length > 12) {
      console.log("user has more than 12 images on file, please delete");
      res.status(400).send('user has more than 12 images on file, please delete');
    } else {
      console.log("user has less than 12 images on file, please add", (12-imagesByCategoryCustom.length)/2 );
      res.status(400).send('user has less than 12 images on file, please add ' + (12-imagesByCategoryCustom.length)/2);
    }
    // res.status(200).json(imagesByCategoryCustom);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
// } else {
//   console.log('tokens are different')
// }
};