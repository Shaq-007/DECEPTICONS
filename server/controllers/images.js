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
    res.status(200).json(imagesByCategoryCustom);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};

exports.get_image_custom = async function (req, res) {
  console.log("Email in custom function", req.params);
  const imagesByCategoryCustom = await Image.find({
    email: req.params.email,
  });
  // console.log(imagesByCategoryCustom);
  if (imagesByCategoryCustom != null) {
    // console.log(`success, images found: ${imagesByCategoryCustom}`);
    res.status(200).json(imagesByCategoryCustom);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};