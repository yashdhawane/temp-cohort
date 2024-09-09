const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ... rest of your Express.js application code

let todos = [];
let nextId = 1;

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: nextId++,
    task: req.body.task,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  
  todos[todoIndex] = { ...todos[todoIndex], ...req.body };
  res.json(todos[todoIndex]);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  
  todos.splice(todoIndex, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Todo list app listening at http://localhost:3000");
});