const express = require("express");
let controllers = require("./controllers");
const app = express();

app.use(express.json());

// app.get('/',(req,res) => {
//     res.send('Hello world!!!');
// });

/// api call to create new users
app.post("/users/create", controllers.create_user);

app.get("/users",controllers.get_users);

app.get("/users/:userid",controllers.get_oneuser);

app.patch("/users/update/:userid",controllers.update_userLevel);

app.delete("/users/delete/:userid", controllers.delete_user);

// api calls for images
app.get("/images/colors", controllers.get_image_category);

// app.get("/images", async (req, res) => {
//   const images = await controllers.get_image_category();
//   if (images != null) {
//     console.log(`success, images found: ${images}`);
//     res.status(200).json(images);
//   } else {
//     console.log("error:cannot find images");
//     res.sendStatus(400);
//   }
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
