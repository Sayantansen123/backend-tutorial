//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})


connectDB()


//this is a another process
/*
(async()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("our app cant connect with our db");
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`The app is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("There is an error while connecting to the data base");
    throw err
  }
})()*/