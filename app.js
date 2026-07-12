import express from "express";
import connection from './config/db.js';
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import addressesRoutes from "./routes/addresses.routes.js";
import districrtRoutes from "./routes/districts.routes.js";
import dsdivisionsRoutes from "./routes/dsdivision.routes.js";
import examsRoutes from "./routes/exams.routes.js";
import familiesRoutes from "./routes/families.routes.js";
import gndivisionsRoutes from "./routes/gndivisions.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/addresses", addressesRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/districts", districrtRoutes);
app.use("/api/dsdivisions", dsdivisionsRoutes);
app.use("/api/exams", examsRoutes);
app.use("/api/families", familiesRoutes);
app.use("/api/gndivisions", gndivisionsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});