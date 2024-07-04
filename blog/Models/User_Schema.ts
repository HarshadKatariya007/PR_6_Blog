import mongoose from 'mongoose'

const User_Schema = new mongoose.Schema
({
    username:String,
    password:String,
    email:String,
    role: {
      type: String,
      enum: ["admin", "user"], 
      default: "user", 
    }
})

export const USER = mongoose.model("User", User_Schema)
