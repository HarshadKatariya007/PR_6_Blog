import { NextFunction, Request, Response } from "express";

export const Is_Admin = (req:Request,res:Response,next:NextFunction) =>
{
    const {role} = req.cookies
    
    if(role=='admin')
    {
        next()
    }
    else if(!role) 
    {
        res.send('login first')
    }
    else
    {
        res.send("You are not authorized to access this page.")
    }   
}

export const Is_Login_Check = (req:Request,res:Response,next:NextFunction) =>
{
    const {id} = req.cookies

    if(id)
    {
        next()
    }
    else
    {
        res.redirect("/user/login")
    }    
}    