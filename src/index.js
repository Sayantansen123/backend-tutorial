//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
})


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 80000,()=>{
    console.log(`the server is started on port: ${process.env.PORT} `)
  })
})
.catch((error) => {
  console.log("error",error);
})





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