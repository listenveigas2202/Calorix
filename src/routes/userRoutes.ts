import type {Request,Response} from 'express'
import {Router} from 'express'

const router= Router();

router.get("/list",(req:Request,res:Response)=>{
    res.send("list of users");
})

router.get("/:id",(req:Request,res:Response)=>{
    res.send(`User with Id ${req.params.id}`);
})


export default router;