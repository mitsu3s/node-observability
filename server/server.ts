import express, { Express } from "express";

const PORT: number = parseInt(process.env.PORT || "9010");
const app: Express = express();
app.use(express.json());

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let todos: Record<number, Todo> = {};
let idCounter = 1;

app.get("/", (req, res) => {
  res.send("Welcome to the verification server for log observation.");
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId);
  const todo = todos[todoId];
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.get("/todos", (req: any, res: any) => {
  res.json(Object.values(todos));
});

app.post("/todos", (req: any, res: any) => {
  const { title } = req.body;
  const todo: Todo = { id: idCounter++, title, completed: false };
  todos[todo.id] = todo;
  res.status(201).json(todo);
});

app.put("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId);
  if (todos[todoId]) {
    const updatedTodo: Todo = {
      ...todos[todoId],
      title: req.body.title || todos[todoId].title,
      completed:
        req.body.completed !== undefined
          ? req.body.completed
          : todos[todoId].completed,
    };
    todos[todoId] = updatedTodo;
    res.json(updatedTodo);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.delete("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId);
  if (todos[todoId]) {
    delete todos[todoId];
    res.status(204).send();
  } else {
    res.status(404).send("Todo not found");
  }
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
