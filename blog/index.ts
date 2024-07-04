import express from "express"
import {Connect} from "./Config/db"
import cookies from "cookie-parser"
import { User_Route } from "./Routes/User_Route"
import dotenv from 'dotenv'
import { Blog_Route } from "./Routes/Blog_Route"
dotenv.config()

const App = express()

let Port = process.env.PORT

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use(cookies())
App.set("view engine" ,"ejs")
App.set("viwes", __dirname + "/views")
App.use(express.static(__dirname+"/public"))


App.get("/", (req, res) => 
{
    res.send("Welcome to the movie API")
})

App.use("/user",User_Route)
App.use("/blog",Blog_Route)
App.listen(Port, ()=>
{
    console.log(`Server Is Running On Port http://localhost:${Port}`)
    Connect()
})