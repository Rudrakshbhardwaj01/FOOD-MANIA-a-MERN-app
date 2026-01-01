import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"Restaurant"
 }).then(()=>{
    console.log("Connected to the database successfully")
 }).catch(err=>{
    console.log("Some error occured while conneting to the database")
 })
}

