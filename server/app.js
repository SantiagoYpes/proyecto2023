import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fileUpload from "express-fileupload";
import cors from "cors";
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,DELETE",
  allowedHeaders: "Content-Type",
};

const corsOptions1 = {
  origin: "http://34.238.85.78:3000",
  methods: "GET,POST,DELETE",
  allowedHeaders: "Content-Type",
};

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(cors(corsOptions));
app.use(cors(corsOptions1));
app.use(adminRoutes);
app.use(userRoutes);

export default app;
