const express = require("express");
let upload_controller = require("./controllers/imageupload");
let user_controllers = require("./controllers/users");
let image_controllers = require("./controllers/images");
const app = express();
const authRoutes = require("./routes/auth"); //from auth
app.use(express.json());

//from Auth APIs
app.use("/api", authRoutes);

/// api call for users

app.get("/users", user_controllers.get_users);

app.get("/users/:userid", user_controllers.get_oneuser);

app.patch("/users/update/:userid", user_controllers.update_userLevel);

app.delete("/users/delete/:userid", user_controllers.delete_user);

// api GET calls for images depending on CATEGORY

app.get("/images/:categoryName", image_controllers.get_image_custom);

////  Code to upload custom photos
//// Using the middleware Multer to upload the photo
var path = require("path");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("cb is: ", cb);
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

app.post(
  "/images/save",
  upload.single("image"),
  upload_controller.post_image_custom
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
