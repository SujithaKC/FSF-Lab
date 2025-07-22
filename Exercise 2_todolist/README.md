# Exercise 2 - Express.js with Handlebars and File Storage

## Aim

To create a Node.js server using Express that stores data from a form into a JSON file and displays the data on another page using Handlebars templating engine.

---

## 📁 Folder Structure

```
Exercise-2/
│
├── views/
│   ├── layouts/
│   │   └── main.hbs        # Main layout (header, body, footer wrapper)
│   ├── home.hbs            # Form to input tasks
│   └── tasks.hbs           # Task list display page
│
├── public/
│   └── style.css           # Dark gradient CSS styling
│
├── tasks.json              # JSON file acting as simple database
├── server.js               # Express server with routes
└── README.md               # Project documentation
```

---

## ⚙️ Technologies Used

- **Node.js**
- **Express.js**
- **Handlebars (hbs)**
- **File System Module (fs)**
- **HTML/CSS (Dark theme with gradient UI)**

---

## 🚀 Procedure

1. Initialize a Node.js project using `npm init`.
2. Install required dependencies: `express`, `hbs`, and `body-parser`.
3. Create `server.js` and configure Express, Handlebars, and static file serving.
4. Create `home.hbs` with a task input form.
5. Store submitted form data to `tasks.json` using Node’s `fs` module.
6. Create `tasks.hbs` to display tasks using Handlebars `{{#each}}` loop.
7. Apply custom CSS to enhance UI (glassmorphism + responsive layout).
8. Test the app on `http://localhost:3000`.

---

## 🎨 Design Overview

1. `home.hbs` displays a form to input tasks, styled with a glowing CTA button and center-aligned layout.
2. `tasks.hbs` uses Handlebars `{{#each}}` loop to dynamically list all tasks stored in `tasks.json`.
3. `main.hbs` acts as the wrapper layout, linking the CSS file and rendering the current view inside `{{{body}}}`.
4. `style.css` applies a professional dark theme with gradients, responsiveness, and minimal glassmorphism.
5. `tasks.json` acts as the local database storing an array of task objects.

---

## ✅ Result

A responsive and visually enhanced To-Do app was successfully built using Express.js. Task entries are stored in a JSON file and rendered dynamically on a separate page using Handlebars.

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
