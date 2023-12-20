import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';

const app = express();
app.use(express.json());

type Note = {
  id: number;
  content: string;
};
type Data = {
  nextId: number;
  notes: Record<string, Note>;
};

async function readData(): Promise<Data> {
  const data = await readFile('./data.json', 'utf-8');
  return JSON.parse(data);
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    const notes: Note[] = [];
    for (const id in data.notes) {
      notes.push(data.notes[id]);
    }
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);
    // bad request
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    // not found
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    res.json(data.notes[id]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/notes', async (req, res) => {
  // get the content from the request
  const content = req.body.content;
  // const {content} = req.body;
  // check that content has been provided on req.body
  if (content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  // get the data from data.json
  const data = await readData();
  // create a Note object to eventually add to the data.notes object
  const note: Note = {
    id: data.nextId,
    content,
  };
  // add at the note id location
  data.notes[data.nextId] = note;
  // increments data.nextId for the next round
  data.nextId++;
  console.log(data);
  // overwrite the data.json file with our new data object
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
  // respond with status 201 and the note
  res.status(201).json(note);
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    // get the id
    const id = Number(req.params.id);

    // check that id is valid value
    // bad request
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    // get the data from data.json

    const data = await readData();

    // check that id exits on data.notes
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    // if we pass the checks, delete the property with that id
    delete data.notes[id];
    // overwrite data.json
    await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
    // send empty success message
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    // get the id
    const id = Number(req.params.id);
    // check that id is a valid value
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }
    // get the content that you want to update from req.body
    const content = req.body.content;
    // check that content was provided as part of request
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    // get the data from data.json
    const data = await readData();
    // check that id exists on data.notes
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    // create a note object with id and content properties
    const note: Note = {
      id,
      content,
    };
    // update the data.notes[id] with the value of the note object
    data.notes[id] = note;
    // overwrite data.json
    await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
    // respond with the note
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
