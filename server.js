import express from "express";
const app = express()
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
dotenv.config()

app.get("/",(req,res)=>{
    throw new Error("error")
    res.send("Welcome")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const Port = process.env.PORT || 5000

app.listen(Port,()=>{
    console.log(`Server is listening at ${Port}`)
})