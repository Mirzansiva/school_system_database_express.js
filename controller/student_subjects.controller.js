import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM student_subjects", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

export const show = (req, res) => {
    mydb.query("SELECT * FROM student_subjects WHERE subject_id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )

}

export const store = (req, res) => {
    const student_subject = req.body;
    mydb.query("INSERT INTO student_subjects SET ?", student_subject, (err, result) => {
        if (err) throw err;
        res.json({ message: "Student Subject created successfully" });
    });
}

export const update = (req, res) => {
    const student_subject = req.body;
    mydb.query("UPDATE student_subjects SET ? WHERE subject_id=?",
        [student_subject, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Student Subject updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query("DELETE FROM student_subjects WHERE subject_id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Student Subject deleted successfully." });
        } 
    );
}