import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM marks", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM marks WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
};

export const store = (req, res) => {
    const marks = req.body;
    mydb.query("INSERT INTO marks SET ?", marks, (err, result) => {
        if (err) throw err;
        res.json({ message: "marks created successfully" });
    });
};



export const update = (req, res) => {
    const marks = req.body;
    mydb.query(
        "UPDATE marks SET? WHERE id=?",
        [student, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "marks updated successfully" });
        }
    );
};

export const destroy = (req, res) => {
    mydb.query(
        "DELETE FROM marks WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;

            res.json({
                message: "marks deleted successfully."
            });
        }
    );
};