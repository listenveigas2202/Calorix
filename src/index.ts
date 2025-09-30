import express from "express";
import routes from "./routes/routes.js";

const app = express()
const PORT:number = 8000;

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
