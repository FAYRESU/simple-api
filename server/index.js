const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let todos = [
  { id: 1, task: 'Learn Docker' },
  { id: 2, task: 'Write API' }
];

app.get('/', (req, res) => {
  res.send('Welcome to Simple API!');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = { id: Date.now(), task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Simple API listening at http://localhost:${port}`);
});
