import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM subject_teachers", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

export const show = (req, res) => {
    mydb.query("SELECT * FROM subject_teachers WHERE subject_id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
}

export const store = (req, res) => {
    const subject_teacher = req.body;
    mydb.query("INSERT INTO subject_teachers SET ?", subject_teacher, (err, result) => {
        if (err) throw err;
        res.json({ message: "Subject Teacher created successfully" });
    });
}

export const update = (req, res) => {
    const subject_teacher = req.body;
    mydb.query("UPDATE subject_teachers SET ? WHERE subject_id=?",
        [subject_teacher, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Subject Teacher updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query("DELETE FROM subject_teachers WHERE subject_id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Subject Teacher deleted successfully." });
        }
    );
}