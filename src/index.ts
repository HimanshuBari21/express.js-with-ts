import express from "express";
import userRouter from "./routes/users";

const app = express();

app.use("/api/users", userRouter);

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, "0.0.0.0", () => console.log("http://localhost:3000"));
