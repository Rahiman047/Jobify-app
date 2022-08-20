import express from "express";
const app = express()
import dotenv from "dotenv";
dotenv.config()
import 'express-async-errors'
app.use(express.json())

// DB
import connectDB from "./db/connect.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

//routes
import authRouter from "./routes/authRoutes.js"
import jobRouter from "./routes/jobsRoutes.js"

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const Port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(Port,()=>{
            console.log(`Server is listening at ${Port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()