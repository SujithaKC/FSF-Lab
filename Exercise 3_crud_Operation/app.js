const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Student = require('./models/student');

// Load .env file
dotenv.config();
// require('dotenv').config();
console.log('🔌 Mongo URI from env:', process.env.MONGO_URI);  // Add this

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB Connected');

    app.listen(3000, () => {
      console.log('🚀 Server running on http://localhost:3000');
    });
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};

startServer();

// Routes
app.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.render('index', { students });
  } catch (err) {
    res.status(500).send('❌ Error loading students');
  }
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', async (req, res) => {
  try {
    const { name, email, branch, year } = req.body;
    await Student.create({ name, email, branch, year });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('❌ Error adding student');
  }
});

app.get('/edit/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.render('edit', { student });
  } catch (err) {
    res.status(500).send('❌ Error fetching student for edit');
  }
});

app.post('/update/:id', async (req, res) => {
  try {
    const { name, email, branch, year } = req.body;
    await Student.findByIdAndUpdate(req.params.id, { name, email, branch, year });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('❌ Error updating student');
  }
});

app.get('/delete/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('❌ Error deleting student');
  }
});
