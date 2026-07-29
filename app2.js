import express from "express";
import layout from "express-ejs-layouts";

import studentRoutes from "./routes/student.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(layout);
app.set("layout", "layouts/main");

app.get("/", (req, res) => {
    res.send("Welcome to Student API");
});

app.use("/", studentRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});