const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const file = 'tasks.json';

// GET tasks
app.get('/tasks', (req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) return res.status(500).send("Error reading tasks.");
    res.json(JSON.parse(data));
  });
});

// POST task
app.post('/tasks', (req, res) => {
  const newTasks = req.body;
  fs.writeFile(file, JSON.stringify(newTasks), (err) => {
    if (err) return res.status(500).send("Error saving tasks.");
    res.sendStatus(200);
  });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
