import express from 'express'
import { default as helmet } from "helmet"
import morgan from 'morgan'
import compression from 'compression'
import dotenv from  'dotenv'
dotenv.config();

const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db
const dbInstance = await import('./dbs/init.mongodb.js')


import { checkOverloadConnect } from './helpers/check.connect.js'
checkOverloadConnect();

// init routes
app.get("/", (req, res, next) => {
    return res.status(200).json({ message: "Hello world" })
})
// handling error

export default app