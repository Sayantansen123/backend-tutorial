
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async()=>{
    try {
      const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n mongoDB connceted db host: ${connectInstance.connection.host}`)//hostname of the db
     
    } catch (error) {
      console.log("There is an error while connecting to the data base");
      process.exit(1);
    }
  }


export default connectDB  