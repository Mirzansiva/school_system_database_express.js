import express from "express";
import layout from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import studentRoutes from "./routes/student.routes.js";
import addressesRoutes from "./routes/addresses.routes.js";
import districtRoutes from "./routes/districts.routes.js";
import dsdivisionRoutes from "./routes/dsdivision.routes.js";
import examsRoutes from "./routes/exams.routes.js";
import familiesRoutes from "./routes/families.routes.js";
import gndivisionsRoutes from "./routes/gndivisions.routes.js";
import gradesRoutes from "./routes/grades.routes.js";
import housesRoutes from "./routes/houses.routes.js";
import provincesRoutes from "./routes/provinces.routes.js";
import subjectsRoutes from "./routes/subjects.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(layout);
app.set("layout", "layouts/main");

app.get("/", (req, res) => {
    res.send("Welcome to Student API");
});

app.use("/", studentRoutes);
app.use("/addresses", addressesRoutes);
app.use("/districts", districtRoutes);
app.use("/dsdivisions", dsdivisionRoutes);
app.use("/exams", examsRoutes);
app.use("/families", familiesRoutes);
app.use("/gndivisions", gndivisionsRoutes);
app.use("/grades", gradesRoutes);
app.use("/houses", housesRoutes);
app.use("/provinces", provincesRoutes);
app.use("/subjects", subjectsRoutes);
app.use("/teachers", teacherRoutes);

app.use((req, res) => {
    res.status(404).send("Route not found");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});