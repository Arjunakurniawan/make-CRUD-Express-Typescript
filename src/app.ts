import express from "express";

const app = express();
const PORT = 3000;

import type { Request, Response } from "express";

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "jhon" },
  { id: 2, name: "jane" },
  { id: 3, name: "alice" },
];

app.use(express.json());

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

app.post("/users", (req: Request, res: Response) => {
  const { name } = req.body;
  if (name === undefined) {
    res.status(404).json({ message: "user not found" });
  }
  const id = users.length + 1;
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).json({ message: "user added successfully" });
});

app.delete("/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    res.status(404).json({ message: "user not found" });
  }
  users.splice(index, 1);
  res.status(200).json({ message: "user deleted successfully" });
});

app.put("/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    res.status(404).json({ message: "user not found" });
  }
  const { name } = req.body;
  users[index].name = name;
  res.json({ message: "user updated successfully" });
});

app.get("/", (req: Request, res: Response) => {
  res.status(404).json({ message: "user not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
