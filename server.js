import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use(notFoundMiddleware)

const Port = process.env.PORT || 5000

app.listen(Port,()=>{
    console.log(`Server is listening at ${Port}`)
})