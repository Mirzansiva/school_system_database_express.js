import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM exams", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}
export const show = (req, res) => {
    mydb.query("SELECT * FROM exams WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
}

export const store = (req, res) => {
    const exam = req.body;
    mydb.query("INSERT INTO exams SET ?", exam, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const update = (req, res) => {
    const exam = req.body;
    mydb.query(
        "UPDATE exams SET ? WHERE id = ?",
        [exam, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Exam updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query(
        "DELETE FROM exams WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Exam deleted successfully" });
        }
    );
}