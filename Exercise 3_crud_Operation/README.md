# Exercise 3 – Student Management CRUD Application

## Aim

To create a full-stack CRUD web application using Node.js, Express.js, MongoDB, and EJS that allows users to manage student information (Create, Read, Update, Delete).

---

## 📁 Folder Structure
```bash
Exercise-3/
│
├── models/
│   └── student.js          # Mongoose schema for Student model
│
├── public/
│   └── style.css           # Stylish theme for frontend UI
│
├── views/
│   ├── index.ejs           # Displays all students in table format
│   ├── add.ejs             # Form to add a new student
│   └── edit.ejs            # Form to edit an existing student
│
├── .env                    # Stores MongoDB connection string securely
├── server.js               # Main Express server file with CRUD logic
└── README.md               # Documentation for the project
```
---

## ⚙️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **EJS (Embedded JavaScript Templating)**
- **dotenv**
- **HTML/CSS (Modern UI design)**

---

## 🚀 Procedure

1. Initialize the project using `npm init`.
2. Install dependencies: `express`, `mongoose`, `ejs`, `dotenv`, `body-parser`.
3. Create a `.env` file to securely store MongoDB URI.
4. Set up Mongoose schema in `student.js`.
5. Design EJS templates for listing, adding, and editing students.
6. Define routes in `server.js` to perform all CRUD operations:
   - GET `/` → Display all students
   - GET `/add` → Show form to add student
   - POST `/add` → Add new student
   - GET `/edit/:id` → Show form to edit student
   - POST `/update/:id` → Update student
   - GET `/delete/:id` → Delete student
7. Style the application using a professional theme in `style.css`.
8. Run the server and test using `http://localhost:3000`.

---

## 🎨 Design Overview

1. `index.ejs` renders all student entries from MongoDB in a styled table.
2. `add.ejs` and `edit.ejs` contain student forms styled with padding, rounded fields, and colored buttons.
3. `style.css` applies a clean and elegant dark/light color scheme with glowing buttons and responsive layout.
4. `.env` secures sensitive database credentials used in `server.js`.
5. `student.js` defines the schema for storing student data (name, email, branch, year).

---

## ✅ Result

A professional and fully functional student CRUD web app was successfully developed. It allows users to manage student entries with a responsive UI and persistent storage using MongoDB.

---

## 📦 Installation (Optional)

```bash
npm install
node server.js
```
---

## 🔒 Author

**Sujitha K C**  
MCA Student | Full Stack Developer  
[GitHub Profile](https://github.com/SujithaKC)
