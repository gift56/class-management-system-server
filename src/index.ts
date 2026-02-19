import AgentAPI from "apminsight";
AgentAPI.config();

import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import express from "express";
import subjectsRouter from "./routes/subjects.js";
import usersRouter from "./routes/users.js";
import classesRouter from "./routes/classes.js";
import securityMiddleware from "./middleware/security.js";
import { auth } from "./lib/auth.js";

const app = express();
const PORT = 8000;
if (!process.env.FRONTEND_URL)
  throw new Error("FRONTEND_URL is not set in .env file");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());
app.use("/api/v1/subjects", subjectsRouter);
app.use("/api/users", usersRouter);
app.use("/api/classes", classesRouter);

app.use(securityMiddleware);

app.get("/", (req, res) => {
  res.send("Class Management API is running! 🎉🎉");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
