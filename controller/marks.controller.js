import mydb from '../config/database.js';

// Display all marks
export const index = (req, res) => {
    mydb.query("SELECT * FROM marks", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch marks");
        }

        res.render("marks/index", {
            title: "Marks List",
            marks: result
        });
    });
};

// Display one mark
export const show = (req, res) => {
    mydb.query(
        "SELECT * FROM marks WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Failed to fetch mark");
            }

            if (result.length === 0) {
                return res.status(404).send("Mark not found");
            }

            res.render("marks/show", {
                title: "Mark Details",
                mark: result[0]
            });
        }
    );
};

// Show create form
export const create = (req, res) => {
    res.render("marks/create", {
        title: "Add New Mark"
    });
};

// Save new mark
export const store = (req, res) => {
    const mark = req.body;

    mydb.query("INSERT INTO marks SET ?", mark, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create mark");
        }

        res.redirect("/marks");
    });
};

// Show edit form
export const edit = (req, res) => {
    mydb.query(
        "SELECT * FROM marks WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Failed to fetch mark");
            }

            if (result.length === 0) {
                return res.status(404).send("Mark not found");
            }

            res.render("marks/edit", {
                title: "Edit Mark",
                mark: result[0]
            });
        }
    );
};

// Update mark
export const update = (req, res) => {
    const mark = req.body;

    mydb.query(
        "UPDATE marks SET ? WHERE id = ?",
        [mark, req.params.id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Failed to update mark");
            }

            res.redirect("/marks");
        }
    );
};

// Delete mark
export const destroy = (req, res) => {
    mydb.query(
        "DELETE FROM marks WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Failed to delete mark");
            }

            res.redirect("/marks");
        }
    );
};