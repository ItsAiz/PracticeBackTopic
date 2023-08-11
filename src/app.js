import express  from "express";
import morgan from "morgan";
//import routes
import webRoutes from "./routes/web.routes"

const app = express()
const cors = require('cors')
require('./drivers/connect-db')

const port = process.env.PORT || 4000 

app.set("port", port)

//middlewares
app.use(morgan("dev"))
app.use(express.json());
app.use(cors())

//routes
app.use(webRoutes)

export default app