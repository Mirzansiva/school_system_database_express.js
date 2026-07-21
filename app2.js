import express from "express";
import mydb from "./config/db.js";
import layout from "express-ejs-layouts";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form data (create/update) padikka இது தேவை

app.set("view engine", "ejs");
app.use(layout);
app.set("layout", "layouts/main");

app.get("/", (req, res) => {
    res.send("Welcome to the Student API");
});

app.get("/students", (req, res) => {
    mydb.query("SELECT * FROM students", (err, result) => {
        if (err) throw err;
        res.render("student/index", { students: result });
    });
});

// IMPORTANT: /students/create ஆனது /students/:id க்கு முன்னாடி இருக்கணும்
app.get("/students/create", (req, res) => {
    res.render("student/create");
});

app.post("/students", (req, res) => {
    const student = req.body;
    mydb.query("INSERT INTO students SET ?", student, (err, result) => {
        if (err) throw err;
        res.redirect("/students");
    });
});

app.get("/students/:id/edit", (req, res) => {
    mydb.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("student/update", { student: result[0] });
    });
});

app.post("/students/:id", (req, res) => {
    const student = req.body;
    mydb.query("UPDATE students SET ? WHERE id = ?", [student, req.params.id], (err, result) => {
        if (err) throw err;
        res.redirect("/students/" + req.params.id);
    });
});

app.get("/students/:id", (req, res) => {
    mydb.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("student/show", { student: result[0] });
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});