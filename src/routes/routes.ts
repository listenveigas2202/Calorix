import { Router } from "express";
import  type { Request, Response } from "express";


const routes = Router();

routes.get("/users",(req,res)=>{
    console.log("running");
    res.send("Hii beloooo")
})

export default routes
