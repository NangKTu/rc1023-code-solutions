import express from 'express';
const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello honey');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
