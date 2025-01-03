import { Request, Response } from "express";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const createUser = (req: Request, res: Response) => {
  console.log(req.body);

  const { name } = req.body;
 
  const id = users.length + 1;
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).json(newUser);
};
