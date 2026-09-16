import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"

const connectDB =async() =>{
    try {
        const connect_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n DB connected db host:${connect_instance.connection.host}`);
        
        
    } catch (error) {
        console.log("DB connection error",error);
        
        
    }
}
export default connectDB