import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM subjects", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("subjects/index", { subjects: [], error: "Unable to load subjects.", title: "Subjects" });
        }
        res.render("subjects/index", { subjects: result, error: null, title: "Subjects" });
    });
};

export const create = (req, res) => {
    res.render("subjects/create", { title: "Add Subject" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM subjects WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch subject");
        }
        res.render("subjects/show", { subject: result[0], title: "Subject Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM subjects WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch subject");
        }
        res.render("subjects/update", { subject: result[0], title: "Edit Subject" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM subjects WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch subject");
        }
        res.render("subjects/delete", { subject: result[0], title: "Delete Subject" });
    });
};

export const store = (req, res) => {
    const { subject_name } = req.body;
    mydb.query("INSERT INTO subjects (subject_name) VALUES (?)", [subject_name], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create subject");
        }
        res.redirect("/subjects");
    });
};

export const update = (req, res) => {
    const { subject_name } = req.body;
    mydb.query("UPDATE subjects SET subject_name = ? WHERE id = ?", [subject_name, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to update subject");
        }
        res.redirect("/subjects");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM subjects WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete subject");
        }
        res.redirect("/subjects");
    });
};



