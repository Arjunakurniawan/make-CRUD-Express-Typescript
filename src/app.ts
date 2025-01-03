import express from "express";
import { createUser, getUsers } from "./controllers/userControllers";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/users", getUsers);

app.post("/users", createUser);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
