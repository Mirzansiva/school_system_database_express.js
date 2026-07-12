import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM districts", (err, result) => {
        if (err) throw err;
        res.json(result);
    })

};

export const show = (req, res) => {
    mydb.query("SELECT * FROM districts WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
};

export const store = (req, res) => {
    const district = req.body;
    mydb.query("INSERT INTO districts SET ?", district, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const update = (req, res) => {
    const district = req.body;
    mydb.query(
        "UPDATE districts SET ? WHERE id = ?",
        [district, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "District updated successfully" });
        }
    );
};

export const destroy = (req, res) => {
    mydb.query(
        "DELETE FROM districts WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;

            res.json({
                message: "District deleted successfully."
            });
        }
    );
};
