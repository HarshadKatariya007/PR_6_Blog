import { Request, Response } from "express"
import { BLOG } from "../Models/Blog_Schema"
import { USER } from "../Models/User_Schema"
import Fuse from "fuse.js";


export const Blog_Create_Page = (req:Request,res:Response) =>
{
    res.render('Blog_Create')
}

export const Blog_Create_Controller = async (req:Request,res:Response) =>
{
    try {
        let { id } = req.cookies
        let User_Data:any = await USER.findById(id)
    
        let { title, content, image, category } = req.body
    
        let Blog_Data = await BLOG.create({ title, content, image, category, authorname: User_Data.username })
        res.cookie("blogId", Blog_Data.id).send(`blog created by ${User_Data.username}`)
    } catch (error) {
        console.log(error);
    }
}  

export const Blog_Category_Find = async (req:Request,res:Response) =>
{
   try {
     const {category} = req.query
     let Find: any
 
     if(category)
     {
         Find = await BLOG.find({category:category})
     }
     else
     {
         Find = await BLOG.find()
     }
     res.send(Find)
   } catch (error) {
    console.log(error);
   }
}    

export const Blog_Page = (req:Request,res:Response) =>
{
    res.render("Blog_Page")
}

export const Blog_Delete = async (req:Request,res:Response) =>
{
   try {
     let {id} = req.params
     let Blog_Deletee = await BLOG.findByIdAndDelete(id)
     res.send(Blog_Deletee)
   } catch (error) {
    console.log(error);
   }
}

export const Blog_Update = async (req:Request,res:Response) =>
{
   try {
     let {id} = req.params
     const Blog_Updatee = await BLOG.findByIdAndUpdate(id,req.body)
     res.send(Blog_Updatee)
   } catch (error) {
    console.log(error);
   }
}

export const Single_Blog_Page = async (req:Request,res:Response) =>
{
    try {
        let {id} = req.params
        let Blog_Single = await BLOG.findById(id)
        res.render('singleblog',{Blog_Single})
    } catch (error) {
        console.log(error);
    }
} 

export const Blog_Like = async (req:Request,res:Response) =>
{
   try {
     let {id} = req.cookies
     let {id_2} = req.params
 
     const Like_Blog:any = await USER.findById(id)
     const Blog_1 = await  BLOG.findById(id_2)
 
     Blog_1?.likedBy.push({username:Like_Blog.username})
     res.send(Blog_1)
   } catch (error) {
    console.log(error);
   }
}

export const Blog_Comments = async (req:Request,res:Response) =>
{
    try {
        let {id} = req.cookies
        let {id_2} = req.params
        
        const Comments:any = await USER.findById(id)
        const Blog_1 = await  BLOG.findById(id_2)
        
        Blog_1?.comments.push({username:Comments.username, text:req.body.text})
        await Blog_1?.save()
        res.send(Blog_1)
    } catch (error) {
        console.log(error);
        
    }
}

export const Blog_Search = async (req:Request,res:Response) =>
{
    try {
        const Search_Blog_Qurey:any = req.query.Search || ' '
        const Search_Blog:any = await BLOG.find()
        const options:any =
        {
            keys:["title","author","category"]
        }
        const fuse = new Fuse(Search_Blog, options)
        const result = fuse.search(Search_Blog_Qurey)
       
        console.log(result);
        res.send([{result:result}])
    } catch (error) {
        console.log(error); 
    }
}    