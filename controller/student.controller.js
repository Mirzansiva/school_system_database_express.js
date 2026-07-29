import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM students", (err, result) => {
        if (err) throw err;
        res.render("student/index", {
            students: result
        });
    });
};

export const create = (req, res) => {
    res.render("student/create");
};

export const store = (req, res) => {

    const student = req.body;

    mydb.query(
        "INSERT INTO students SET ?",
        student,
        (err, result) => {

            if (err) throw err;

            res.redirect("/students");

        }
    );

};

export const edit = (req, res) => {

    mydb.query(
        "SELECT * FROM students WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) throw err;

            res.render("student/update", {
                student: result[0]
            });

        }
    );

};

export const update = (req, res) => {

    const student = req.body;

    mydb.query(
        "UPDATE students SET ? WHERE id=?",
        [student, req.params.id],
        (err, result) => {

            if (err) throw err;

            res.redirect("/students/" + req.params.id);

        }
    );

};

export const destroyPage = (req, res) => {

    mydb.query(
        "SELECT * FROM students WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) throw err;

            if (!result[0]) {
                return res.redirect("/students");
            }

            res.render("student/destroy", {
                student: result[0]
            });

        }
    );

};

export const destroy = (req, res) => {

    mydb.query(
        "DELETE FROM students WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) throw err;

            if (req.method === "DELETE") {
                return res.json({
                    message: "Student deleted successfully"
                });
            }

            res.redirect("/students");

        }
    );

};

export const show = (req, res) => {

    mydb.query(
        "SELECT * FROM students WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err) throw err;

            res.render("student/show", {
                student: result[0]
            });

        }
    );

};