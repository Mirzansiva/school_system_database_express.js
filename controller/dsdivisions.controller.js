import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
};

export const store = (req, res) => {
    const dsdivision = req.body;
    mydb.query("INSERT INTO dsdivisions SET ?", dsdivision, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const update = (req, res) => {
    const dsdivision = req.body;
    mydb.query(
        "UPDATE dsdivisions SET ? WHERE id = ?",
        [dsdivision, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "DS Division updated successfully" });
        }
    );
};

export const destroy = (req, res) => {
    mydb.query(
        "DELETE FROM dsdivisions WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;

            res.json({
                message: "DS Division deleted successfully."
            });
        }
    );
};
