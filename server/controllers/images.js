const express = require("express");
const { Image } = require("../db/models");


// IMAGES - GET by CATEGORY
exports.get_image_colors = async function (req, res) {
  const imagesByCategoryColors = await Image.find({
    categoryName: "Colors",
  });
  // console.log(imagesByCategoryColors);
  if (imagesByCategoryColors != null) {
    // console.log(`success, images found: ${imagesByCategoryColors}`);
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
  // console.log(imagesByCategoryAnimals);
  if (imagesByCategoryAnimals != null) {
    // console.log(`success, images found: ${imagesByCategoryAnimals}`);
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
  // console.log(imagesByCategoryShapes);
  if (imagesByCategoryShapes != null) {
    // console.log(`success, images found: ${imagesByCategoryShapes}`);
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
  // console.log(imagesByCategoryLetters);
  if (imagesByCategoryLetters != null) {
    // console.log(`success, images found: ${imagesByCategoryLetters}`);
    res.status(200).json(imagesByCategoryLetters);
  } else {
    console.log("error:cannot find images");
    res.sendStatus(400);
  }
};
