import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let db = [];

app.get("/todos", (req, res) => {
  return res.json(db);
});

app.post("/todos", (req, res) => {
  if (req.body) {
    db.push(req.body);
    console.log(db);

    res.json(db);
  }
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  console.log(data);

  if (id) {
    db = db.map((todo) =>
      todo.id === id ? { ...todo, status: data.status } : todo
    );
    res.json(db);
  }
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    db = db.filter((todo) => todo.id !== id);
    res.json(db);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
