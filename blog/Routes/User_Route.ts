import { Router } from "express"

import { User_Delete_Controller, User_Login_Controller, User_Login_Page, User_Signup_Controller, User_Signup_Page } from "../Controller/User_Controller"

export const User_Route = Router()

/* User Signup Route GET POST */

User_Route.get("/signup",User_Signup_Page)
User_Route.post('/signup',User_Signup_Controller)

/* User Login Route GET POST */

User_Route.get("/login",User_Login_Page)
User_Route.post('/login',User_Login_Controller)

/* User Delete Route */

User_Route.delete('/delete/:id',User_Delete_Controller)