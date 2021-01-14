var fs = require('fs');
const { Category, User } = require("./db/models")

//Set up mongoose connection
require("./db/mongoose");

async function createUser() { 
    const user = new User({
        username: 'user3',
        email: 'user3@abc.com',
        password: 'whddjsshdhsd',
        userlevel: 1,
    })
/// saving the user into the database
    const result = await user.save();
    console.log(result);
}
createUser();

async function createCategoryAnimal() { 
    var imageData = fs.readFileSync(__dirname + '/images/Oil-ground.png');
    const categoryanimal = new CategoryAnimal({
        categoryAnimal: 'Animals',
        img: imageData
    })
/// saving the xx into the database
    const result = await categoryanimal.save();
    console.log(result);
}
// createCategoryAnimal();