import express from 'express'
import userRoutes from "./routes/userRoutes.js"
import llmRoutes from "./routes/llmRoutes.js"

const app = express();

app.use(express.json());

app.use("/users",userRoutes);
app.use("/llmResponse",llmRoutes)

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server running n http://localhost:${PORT}`)
})
