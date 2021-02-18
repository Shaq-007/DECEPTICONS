const mongoose = require("./mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate(value) {
        if (value.length > 20) {
          throw new Error("Username must be less than 20 characters long");
        }
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email entered");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    imagesUpload: {
      type: Boolean,
      default: false
    },
    userlevel: {
      type: Number,
    },
    UserStatus: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

const imageSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  categoryName: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = { User, Image };
