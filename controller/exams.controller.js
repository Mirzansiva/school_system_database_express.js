import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM exams", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("exams/index", { exams: [], error: "Unable to load exams.", title: "Exams" });
        }
        res.render("exams/index", { exams: result, error: null, title: "Exams" });
    });
};

export const create = (req, res) => {
    res.render("exams/create", { title: "Add Exam" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM exams WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch exam");
        }
        res.render("exams/show", { exam: result[0], title: "Exam Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM exams WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch exam");
        }
        res.render("exams/update", { exam: result[0], title: "Edit Exam" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM exams WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch exam");
        }
        res.render("exams/delete", { exam: result[0], title: "Delete Exam" });
    });
};

export const store = (req, res) => {
    const exam = req.body;
    mydb.query("INSERT INTO exams SET ?", exam, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create exam");
        }
        res.redirect("/exams");
    });
};

export const update = (req, res) => {
    const exam = req.body;
    mydb.query("UPDATE exams SET ? WHERE id = ?", [exam, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to update exam");
        }
        res.redirect("/exams");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM exams WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete exam");
        }
        res.redirect("/exams");
    });
};



