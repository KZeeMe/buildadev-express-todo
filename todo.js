//• Create an Express application with a todo list functionality.
//• Define routes to display the list of todos ("/todos"), add a new todo
//("/todos/new"), and delete a todo ("/todos/:id/delete").
//• Implement the logic to store and manage todos using an array or a database
//(e.g., MongoDB).
//• Start the server and test the todo list functionality in a web browser.

const express = require("express");

const app = express();
const port = 4000;

let todos = [1, 2, 3];

//display todos

app.get("/todos", (req, res) => {
  res.json(todos);
});

//add a new todo
app.post("/todos/new", (req, res) => {
  // destructuring
  // const {todo} = req.body
  const todo = req.body;
  if (todo) {
    todos.push(todo);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

// DELETE /todos/:id
app.delete("/todos/:id/delete", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  const deletedTodo = todos.splice(index, 1)[0];
  res.sendStatus(200);

  res.json(deletedTodo);
});

app.delete("/todos/deleteAll", (req, res) => {
  todos = [];
  deletedTodo = todos.splice(index, 1)[0];
  res.json(deletedTodo);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Simulate a Delete request to /todos/:id

app._router.handle(
  { method: "DELETE", url: `/todos/${todos[0]}` },
  {},
  () => {}
);
