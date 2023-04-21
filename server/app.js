import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,DELETE',
    allowedHeaders: 'Content-Type',
  };
app.use(express.json())

app.use(cors(corsOptions));
app.use(adminRoutes)
app.use(userRoutes)

export default app