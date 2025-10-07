import type { Request,Response } from "express";
import { Router } from "express";

const router = Router();

router.get("/",(req:Request,res:Response)=>{
    res.send("llm called");
})

router.post("/",(req:Request,res:Response)=>{
    res.send("Product creates");
})


export default router;