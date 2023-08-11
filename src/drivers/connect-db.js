const mongoose = require("mongoose")
const mongoDBURL = 'mongodb://localhost:27017';

mongoose.connect(process.env.MONGODB_URI || mongoDBURL).then(()=>{
    console.log("Connected to db")
})
.catch((error) =>{
    console.log(error)
})

module.exports = mongoose;