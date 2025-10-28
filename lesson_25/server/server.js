import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const smiles = [
  { id: 1, emoji: "😃", votes: 0 },
  { id: 2, emoji: "😊", votes: 0 },
  { id: 3, emoji: "😎", votes: 0 },
  { id: 4, emoji: "🤩", votes: 0 },
  { id: 5, emoji: "😍", votes: 0 },
];

app.get("/smiles", (req, res) => {
  console.log("get");

  res.json(smiles);
});

app.post("/smiles/:id", (req, res) => {
  console.log("post");
  const id = parseInt(req.params.id);

  if (!id) {
    return;
  }

  const smilesCurrent = smiles.find((smile) => smile.id === id);

  if (!smilesCurrent) {
    return;
  }

  smilesCurrent.votes += 1;
  res.json(smiles);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
