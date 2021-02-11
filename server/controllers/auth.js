const { User } = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");
require("dotenv").config();

//Setting up form validation in our express APIs
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//"Signup & Singnin method creation"//
exports.signup = (req, res, next) => {
  let {
    username,
    email,
    password,
    password_confirmation,
    userlevel,
  } = req.body;
  console.log("req.body is: ", JSON.stringify(req.body));

  // validate the fields of the request and push errors into an array
  let errors = [];
  if (!username) {
    errors.push({ username: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({ password_confirmation: "required" });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  // Signup Logic
  User.findOne({ email: email })
    .then((user) => {
      console.log("This is the user: ", user);
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        user = new User({
          username: username,
          email: email,
          password: password,
          password_confirmation: password,
          userlevel: userlevel,
        });
      }

      //Hash Password //
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) throw err;
          user.password = hash;
          user
            .save()
            .then((response) => {
              res.status(200).json({
                success: true,
                result: response,
              });
            })
            .catch((err) => {
              res.status(500).json({
                errors: [{ error: err }],
              });
            });
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "something went wrong" + err.message }],
      });
    });
};

//Signin//
exports.signin = (req, res) => {
  let { email, password, userlevel } = req.body;

  //validate every request and push into errors array
  let errors = [];

  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  // Signin Logic
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          errors: [{ user: "not found" }],
        });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res
                .status(404)
                .json({ errors: [{ password: "incorrect" }] });
            }

            console.log("token Secret :" + process.env.TOKEN_SECRET);
            console.log("process.env :", process.env);
            const access_token = createJWT(
              user.email,
              user._id,
              user.userlevel,
              3600
            );
            jwt.verify(
              access_token,
              process.env.TOKEN_SECRET,
              (err, decoded) => {
                if (err) {
                  return res.status(500).json({ errors: " verify " + err });
                }
                if (decoded) {
                  return res.status(200).json({
                    success: true,
                    token: access_token,
                    currentUser: user,
                    userlevel: userlevel,
                  });
                }
              }
            );
          })
          .catch((err) => {
            return res
              .status(500)
              .json({ errors: "bcrypt.compare:" + err.message });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json({ errors: "exception: " + err.message });
    });
};
