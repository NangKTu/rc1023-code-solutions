import express from 'express';
const app = express();
const port = 8080;
let nextID = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};
app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;

  if (!name || !course || !score) {
    return res
      .status(400)
      .json({ error: 'Name, course, and score are required' });
  }
  const newGradeId = nextID++;
  const newGrade: Grade = {
    id: newGradeId,
    name,
    course,
    score,
  };

  grades[newGradeId] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
