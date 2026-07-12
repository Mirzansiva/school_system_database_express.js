import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM families", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

export const show = (req, res) => {
    mydb.query("SELECT * FROM families WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
}

export const store = (req, res) => {
    const family = req.body;
    mydb.query("INSERT INTO families SET ?", family, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

export const update = (req, res) => {
    const family = req.body;
    mydb.query(
        "UPDATE families SET ? WHERE id = ?",
        [family, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Family updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query(
        "DELETE FROM families WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Family deleted successfully" });
        }
    );
}