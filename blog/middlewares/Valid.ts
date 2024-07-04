import { NextFunction, Request, Response } from "express";

export const Is_Valid_Check = (req:Request,res:Response,next:NextFunction) =>
{
    const {title,content,image} = req.body

    if(!title || !content || !image)
    {
        res.status(400).send("All fields are required");
    }
    else
    {
        next()
    }    
}    