// const express = require("express");
// To use as import we have to use type as module in package.json
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
  //   console.log("req ->", req);
  //   console.log("res ->", res);
  res.send(`I'm up`);
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
];

//READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

//CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json({ message: "New Todo Added!" });
});

//UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoIndex = todos.findIndex((td) => td.id === req.params.id);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: req.params.id,
      ...newTodoData,
    };
  }

  res.json({ message: `successfully updated ${todoIndex} record` });
});

// Delete
app.delete("/todos/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({ message: "deleted successfully" });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
