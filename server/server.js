const express = require("express");
let upload_controller = require("./controllers/imageupload");
let user_controllers = require("./controllers/users");
let image_controllers = require("./controllers/images");
const app = express();
const authRoutes = require("./routes/auth"); //from auth
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//from Auth APIs
app.use("/api", authRoutes);

/// api call for users

app.get("/users", user_controllers.get_users);

app.get("/users/:userid", user_controllers.get_oneuser);

app.patch("/users/update/:userid", user_controllers.update_userLevel);

app.patch(
  "/imageupload/update/:userid",
  user_controllers.update_imageuploadcode
);

// app.patch("/users/update/:userid", user_controllers.update_userPassword); ///its a duplication have same api method in authRout//

app.delete("/users/delete/:userid", user_controllers.delete_user);

// api GET calls for images depending on CATEGORY

app.get("/images/:categoryName", image_controllers.get_images);

app.get("/custom/:email", image_controllers.get_image_custom);
///images/${categoryName}/${email}
////  Code to upload custom photos
//// Using the middleware Multer to upload the photo
var path = require("path");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({
  storage: storage,
  limits: { files: 6 },
});

app.post(
  "/images/save",
  upload.array("image", 6),
  upload_controller.resizeImages,
  upload_controller.post_image_custom,
  upload_controller.getResult
);

app.use(function (err, req, res, next) {
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send("File is too large");
  } else if (err.code === "LIMIT_FILE_COUNT") {
    res.status(400).send("Too many files");
  } else {
    res.status(400).send(err);
    console.log("error from app.use", err);
  }
});

app.use(express.static(path.join(__dirname, '../client/build')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
