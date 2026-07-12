import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM students", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM students WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
};

export const store = (req, res) => {
    const student = req.body;
    mydb.query("INSERT INTO students SET ?", student, (err, result) => {
        if (err) throw err;
        res.json({ message: "Student created successfully" });
    });
};



export const update = (req, res) => {
    const student = req.body;
    mydb.query(
        "UPDATE students SET? WHERE id=?",
        [student, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Student updated successfully" });
        }
    );
};

export const destroy = (req, res) => {
    mydb.query(
        "DELETE FROM students WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;

            res.json({
                message: "Student deleted successfully."
            });
        }
    );
};