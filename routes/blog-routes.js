import express from 'express';
import {getAllblogs,addBlog,updateBlog,getById,deleteBlog, getByUserId } from '../controllers/blog-controller';

const brouter=express.Router();


brouter.get("/",getAllblogs);
brouter.post("/add",addBlog);
brouter.put("/update/:id",updateBlog);//put is used to update
brouter.get("/:id",getById);
brouter.delete("/:id",deleteBlog);
brouter.get("/user/:id",getByUserId);


export default brouter;


