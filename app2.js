import express from "express";
import db from "./config/db.js";
import layout from "express-ejs-layouts";

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

app.use(layout);
app.set("layout", "layouts/main");

app.get("/", (req, res) => {
    res.send("Welcome to the Student API");
});

app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) throw err;
        res.render("student/index", { students: result });
    });
});

app.get("/students/:id", (req, res) => {
    db.query(
        "SELECT * FROM students WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.render("student/show", { student: result[0] });
        }
    );
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});