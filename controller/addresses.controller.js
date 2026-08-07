import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM addresses", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("addresses/index", { addresses: [], error: "Unable to load addresses.", title: "Addresses" });
        }
        res.render("addresses/index", { addresses: result, error: null, title: "Addresses" });
    });
};

export const create = (req, res) => {
    res.render("addresses/create", { title: "Add Address" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM addresses WHERE gn_id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch address");
        }
        res.render("addresses/show", { address: result[0], title: "Address Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM addresses WHERE gn_id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch address");
        }
        res.render("addresses/update", { address: result[0], title: "Edit Address" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM addresses WHERE gn_id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch address");
        }
        res.render("addresses/delete", { address: result[0], title: "Delete Address" });
    });
};

export const store = (req, res) => {

    const { gn_id, gn_code } = req.body;

    mydb.query(
        "INSERT INTO addresses (gn_id, gn_code) VALUES (?, ?)",
        [gn_id, gn_code],
        (err) => {

            if (err) {
                console.error(err);
                return res.status(500).send("Failed to create address");
            }

            res.redirect("/addresses");
        }
    );
};

export const update = (req, res) => {

    const { gn_code } = req.body;

    mydb.query(
        "UPDATE addresses SET gn_code = ? WHERE gn_id = ?",
        [gn_code, req.params.id],
        (err) => {

            if (err) {
                console.error(err);
                return res.status(500).send("Failed to update address");
            }

            res.redirect("/addresses");
        }
    );
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM addresses WHERE gn_id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete address");
        }
        res.redirect("/addresses");
    });
};



