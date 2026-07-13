import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM houses", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM houses WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
}

export const store = (req, res) => {
    const house = req.body;
    mydb.query("INSERT INTO houses SET ?", house, (err, result) => {
        if (err) throw err;
        res.json({ message: "House created successfully" });
    });
}

export const update = (req, res) => {
    const house = req.body;
    mydb.query("UPDATE houses SET ? WHERE id=?",
        [house, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "House updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query("DELETE FROM houses WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "House deleted successfully." });
        }
    );
}