const express = require("express");
const path = require("path");
const app = express();
const port = 8082;

// Middleware
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.json());

// Routes
app.get("/allTodos", (req, res) => {
  getAllTodos()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/addTodo", (req, res) => {
  addTodo(req.body.todo)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

app.delete("/deleteTodo/:todoID", (req, res) => {
  deleteTodo(req.params.todoID)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

app.listen(port, () => console.log(`Server is running on ${port}...`));
