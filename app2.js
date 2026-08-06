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
app.use("/api/addresses", addressesRoutes);
app.use("/api/districts", districtRoutes);
app.use("/api/dsdivisions", dsdivisionRoutes);
app.use("/api/exams", examsRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});