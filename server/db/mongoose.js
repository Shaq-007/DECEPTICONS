// const mongoose = require("mongoose");
// const connectionURL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/memoryland'
// console.log(connectionURL)
// mongoose.connect(connectionURL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
// });

const mongoose = require("mongoose");
const connectionURL = process.env.DATABASE_URL || 'mongodb+srv://Liliana:BSrhhxBUT5499zvH@cluster0.hicow.mongodb.net/MemoryLand?retryWrites=true&w=majority'
console.log('connected to db')
mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});