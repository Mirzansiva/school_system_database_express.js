import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM addresses", (err, result) => {
        if (err) throw err;
        res.json(result);
    })  

};

export const show = (req, res) => {
    mydb.query("SELECT * FROM addresses WHERE gn_id=?",
        [req.params.gn_id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
};

export const store = (req, res) => {
    const address = req.body;
    mydb.query("INSERT INTO addresses SET ?", address, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const update = (req, res) => {
    const address = req.body;
    mydb.query("UPDATE addresses SET ? WHERE gn_id=?", [address, req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM addresses WHERE gn_id=?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};
