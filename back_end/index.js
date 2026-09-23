import express from "express"
import dotenv from "dotenv"
import connectDB from "./DB_connect.js";
import route from "./routes/user.route.js"
import cors from "cors"

const app = express()

dotenv.config();
const PORT  = process.env.PORT || 4000


app.use(express.json());     /// parce the data in json format
app.use(cors({ credentials: true, origin: "http://localhost:5173" })); // Enable CORS for requests from localhost:5173 frontend

app.use("/api/users", route);



connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log("port running localhost:",PORT)
})
})