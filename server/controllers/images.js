const express = require("express");
const { Image } = require("../db/models");

// IMAGES - GET by CATEGORY

exports.get_image_custom = async function (req, res) {
  console.log("custom images categoryName", req.params.categoryName);
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
