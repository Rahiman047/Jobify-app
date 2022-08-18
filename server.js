import express from "express";
const app = express()
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Welcome")
})

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