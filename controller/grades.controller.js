import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM grades", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM grades WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
};

export const store = (req, res) => {
    const grade = req.body;
    mydb.query("INSERT INTO grades SET ?", grade, (err, result) => {
        if (err) throw err;
        res.json({ message: "Grade created successfully" });
    });
};

export const update = (req, res) => {
    const grade = req.body;
    mydb.query("UPDATE grades SET ? WHERE id=?",
        [grade, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Grade updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query("DELETE FROM grades WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Grade deleted successfully." });
        }
    );
}