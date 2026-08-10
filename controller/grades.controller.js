import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM grades", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("grades/index", {
                grades: [],
                error: "Unable to load grades. Please check the database connection.",
                title: "Grades"
            });
        }
        res.render("grades/index", { grades: result, error: null, title: "Grades" });
    });
};

export const create = (req, res) => {
    res.render("grades/create", { title: "Add Grade" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM grades WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch grade");
        }
        if (!result.length) {
            return res.status(404).send("Grade not found");
        }
        res.render("grades/show", { grade: result[0], title: "Grade Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM grades WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch grade");
        }
        if (!result.length) {
            return res.status(404).send("Grade not found");
        }
        res.render("grades/update", { grade: result[0], title: "Edit Grade" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM grades WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch grade");
        }
        if (!result.length) {
            return res.status(404).send("Grade not found");
        }
        res.render("grades/delete", { grade: result[0], title: "Delete Grade" });
    });
};

export const store = (req, res) => {
    const { grade_name, grade_group } = req.body;
    mydb.query("INSERT INTO grades (grade_name, grade_group) VALUES (?, ?)", [grade_name, grade_group], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create grade");
        }
        res.redirect("/grades");
    });
};

export const update = (req, res) => {
    const { grade_name, grade_group } = req.body;
    mydb.query("UPDATE grades SET grade_name = ?, grade_group = ? WHERE id = ?", [grade_name, grade_group, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to update grade");
        }
        res.redirect("/grades");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM grades WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete grade");
        }
        res.redirect("/grades");
    });
};


