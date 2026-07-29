import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query(
        "SELECT gn_id AS id, full_address AS address, gn_id AS gn_division_id, village FROM addresses",
        (err, result) => {
            if (err) throw err;
            res.render("addresses/index", { addresses: result });
        }
    );
};

export const create = (req, res) => {
    res.render("addresses/create");
};

export const store = (req, res) => {
    const address = req.body;

    mydb.query("INSERT INTO addresses SET ?", address, (err) => {
        if (err) throw err;
        res.redirect("/api/addresses");
    });
};

export const show = (req, res) => {
    mydb.query(
        "SELECT gn_id AS id, full_address AS address, gn_id AS gn_division_id, village FROM addresses WHERE gn_id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.render("addresses/show", { address: result[0] });
        }
    );
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM addresses WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("addresses/edit", { address: result[0] });
    });
};

export const update = (req, res) => {
    const address = req.body;

    mydb.query("UPDATE addresses SET ? WHERE id = ?", [address, req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/api/addresses");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM addresses WHERE id = ?", [req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/api/addresses");
    });
};
