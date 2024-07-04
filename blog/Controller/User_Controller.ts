import { Request, Response } from "express"
import { USER } from "../Models/User_Schema"


/* User Signup */
export const User_Signup_Page = (req:Request,res:Response) =>
{
    res.render('signup')
}

export const User_Signup_Controller = async (req:Request,res:Response) =>
{
   try {
     let { username, password, email, role } = req.body
     let User_Data = await USER.findOne({ email: email })
 
     if (User_Data) {
         res.cookie("role", User_Data.role)
         res.cookie("id", User_Data.id).send(`Account created successfully ${User_Data.username}`)
     }
     else {
         let Data_User = await USER.create(req.body)
         res.cookie("role", Data_User.role)
         res.cookie("id", Data_User.id).send(`Account created successfully ${Data_User.username}`)
     }
   } catch (error) {
    console.log(error);
   }
}    


/* User Login */
export const User_Login_Page = async (req:Request,res:Response) =>
{
    res.render('login')
}

export const User_Login_Controller  = async (req:Request,res:Response) =>
{
    try {
        let { email, password } = req.body
        let User_Data = await USER.findOne({ email: email, password: password });
        if (User_Data) {
          res.cookie("id", User_Data.id); 
          res.cookie("role", User_Data.role);
          res.send(`Welcome User ${User_Data.username}`);
        } else {
          res.send("Invalid Credentials.");
        }
    } catch (error) {
        console.log(error);
    }
}


/* ----------------------------------------------------------------------------------------------- */

/* User Delete */

export const User_Delete_Controller = async (req:Request,res:Response) =>
{
  try {
      let {id}:any = req.params.id
      let User_Data:any = await USER.findByIdAndDelete(id)
      res.send(`User deleted ${User_Data.username}`);
  } catch (error) {
    console.log(error);
  }
}    
