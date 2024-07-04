import { Router } from "express"
import { Blog_Category_Find, Blog_Comments, Blog_Create_Controller, Blog_Create_Page, Blog_Delete, Blog_Like, Blog_Page, Blog_Search, Blog_Update, Single_Blog_Page } from "../Controller/Blog_Controller"
import { Is_Admin } from "../middlewares/Auth"
import { Is_Valid_Check } from "../middlewares/Valid"

export const Blog_Route = Router()

/* Blog Create GET POST */

Blog_Route.get("/create",Is_Admin,Blog_Create_Page)
Blog_Route.post("/create", Is_Admin,Is_Valid_Check,Blog_Create_Controller)
Blog_Route.get("/blogs",Blog_Category_Find)
Blog_Route.get("/",Blog_Page)
Blog_Route.delete("/delete/:id",Is_Admin,Blog_Delete)
Blog_Route.patch("/edit/:id",Is_Admin,Blog_Update)
Blog_Route.get("/singleBlog/:id",Single_Blog_Page)
Blog_Route.patch("/like/:id_2",Blog_Like)
Blog_Route.patch("/comment/:id_2",Blog_Comments)
Blog_Route.get("/search",Blog_Search)