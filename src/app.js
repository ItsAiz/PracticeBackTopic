import express  from "express";
import morgan from "morgan";
//import routes
import webRoutes from "./routes/web.routes"

const mongoose = require("mongoose")

const app = express()
const cors = require('cors')

const port = process.env.PORT || 4000 
const mongoDBURL = 'mongodb://localhost:27017';
app.set("port", port)

mongoose.connect(process.env.MONGODB_URI || mongoDBURL).then(()=>{
    console.log("Connected to db")
})
.catch((error) =>{
    console.log(error)
})

//middlewares
app.use(express.json());
app.use(cors())

//routes
app.use(webRoutes)

export default app