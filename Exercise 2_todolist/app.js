const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3000;

// Handlebars setup
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: 'views/layouts/' }));
app.set('view engine', 'hbs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.post('/add-task', (req, res) => {
  const task = req.body.task;
  const taskData = { task };

  const filePath = path.join(__dirname, 'data', 'tasks.json');
  let tasks = [];

  if (fs.existsSync(filePath)) {
    const jsonData = fs.readFileSync(filePath);
    tasks = JSON.parse(jsonData);
  }

  tasks.push(taskData);
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

  res.redirect('/tasks');
});

app.get('/tasks', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'tasks.json');
  let tasks = [];

  if (fs.existsSync(filePath)) {
    const jsonData = fs.readFileSync(filePath);
    tasks = JSON.parse(jsonData);
  }

  res.render('tasks', { tasks });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
