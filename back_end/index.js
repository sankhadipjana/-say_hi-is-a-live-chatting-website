import express from "express"
import dotenv from "dotenv"
import connectDB from "./DB_connect.js";

const app = express()
dotenv.config();
const PORT  = process.env.PORT || 4000



connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log("port running localhost:",PORT)
})
})