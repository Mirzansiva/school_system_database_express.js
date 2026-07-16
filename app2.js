import express from "express";
import mydb from "./config/db.js";
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import addressesRoutes from "./routes/addresses.routes.js";
import districtsRoutes from "./routes/districts.routes.js";
import dsdivisionsRoutes from "./routes/dsdivision.routes.js";
import examsRoutes from "./routes/exams.routes.js";
import familiesRoutes from "./routes/families.routes.js";
import gndivisionsRoutes from "./routes/gndivisions.routes.js";
import gradesRoutes from "./routes/grades.routes.js";
import housesRoutes from "./routes/houses.routes.js";
import marksRoutes from "./routes/marks.routes.js";
import provincesRoutes from "./routes/provinces.routes.js";
import student_subjectsRoutes from "./routes/student_subjects.routes.js";
import subject_teacherRoutes from "./routes/subject_teacher.routes.js";
import subjectsRoutes from "./routes/subjects.routes.js";

const app = express()
app.set("view engine","ejs");

app.use(express.json());
app.use("/api/addresses", addressesRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/districts", districtsRoutes);
app.use("/api/dsdivisions", dsdivisionsRoutes);
app.use("/api/exams", examsRoutes);
app.use("/api/families", familiesRoutes);
app.use("/api/gndivisions", gndivisionsRoutes);
app.use("/api/grades", gradesRoutes);
app.use("/api/houses", housesRoutes);
app.use("/api/marks", marksRoutes);
app.use("/api/provinces", provincesRoutes);
app.use("/api/student_subjects", student_subjectsRoutes);
app.use("/api/subject_teachers", subject_teacherRoutes);
app.use("/api/subjects", subjectsRoutes);

app.get("/", (req, res) => {
    res.render("index",
        {
            title: "Express",
            message: "Welcome to Express"
        }
    );
});


app.get("/students", (req, res) => {
    mydb.query("SELECT * FROM students", (err, result) => {
        if (err) throw err;
        res.render("student/index", { students: result });
    });

});

app.get("/students/:id", (req, res) => {
    mydb.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("student/show", { student: result[0] });
    });

});


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});