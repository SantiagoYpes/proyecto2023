import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

console.log(__dirname);

app.use(express.json())

app.use(adminRoutes)

app.use(express.static(join(__dirname,'../client/build')))
console.log(join(__dirname,'../client/build'));
export default app