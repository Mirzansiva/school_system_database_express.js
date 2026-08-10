import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM teachers", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("teachers/index", {
                teachers: [],
                error: "Unable to load teachers. Please check the database connection.",
                title: "Teachers"
            });
        }
        res.render("teachers/index", { teachers: result, error: null, title: "Teachers" });
    });
};

export const create = (req, res) => {
    res.render("teachers/create", { title: "Add Teacher" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM teachers WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch teacher");
        }
        if (!result.length) {
            return res.status(404).send("Teacher not found");
        }
        res.render("teachers/show", { teacher: result[0], title: "Teacher Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM teachers WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch teacher");
        }
        if (!result.length) {
            return res.status(404).send("Teacher not found");
        }
        res.render("teachers/update", { teacher: result[0], title: "Edit Teacher" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM teachers WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch teacher");
        }
        if (!result.length) {
            return res.status(404).send("Teacher not found");
        }
        res.render("teachers/delete", { teacher: result[0], title: "Delete Teacher" });
    });
};

export const store = (req, res) => {
    const { first_name, last_name, registration_number } = req.body;
    mydb.query("INSERT INTO teachers (first_name, last_name, registration_number) VALUES (?, ?, ?)", [first_name, last_name, registration_number], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create teacher");
        }
        res.redirect("/teachers");
    });
};

export const update = (req, res) => {
    const { first_name, last_name, registration_number } = req.body;
    mydb.query("UPDATE teachers SET first_name = ?, last_name = ?, registration_number = ? WHERE id = ?", [first_name, last_name, registration_number, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to update teacher");
        }
        res.redirect("/teachers");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM teachers WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete teacher");
        }
        res.redirect("/teachers");
    });
};


