import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM subjects", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

export const show = (req, res) => {
    mydb.query("SELECT * FROM subjects WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
}


export const store = (req, res) => {
    const subject = req.body;
    mydb.query("INSERT INTO subjects SET ?", subject, (err, result) => {
        if (err) throw err;
        res.json({ message: "Subject created successfully" });
    }
    );
}

export const update = (req, res) => {
    const subject = req.body;
    mydb.query("UPDATE subjects SET ? WHERE id=?",
        [subject, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Subject updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query("DELETE FROM subjects WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Subject deleted successfully." });
        }
    );
}