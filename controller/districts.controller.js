import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM districts", (err, result) => {
        if (err) throw err;
        res.render("districts/index", { districts: result });
    });
};

export const create = (req, res) => {
    res.render("districts/create");
};

export const store = (req, res) => {
    const district = req.body;
    mydb.query("INSERT INTO districts SET ?", district, (err) => {
        if (err) throw err;
        res.redirect("/api/districts");
    });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM districts WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("districts/show", { district: result[0] });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM districts WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("districts/update", { district: result[0] });
    });
};

export const update = (req, res) => {
    const district = req.body;
    mydb.query("UPDATE districts SET ? WHERE id = ?", [district, req.params.id], (err) => {
        if (err) throw err;
        res.redirect(`/api/districts/${req.params.id}`);
    });
};

export const destroyPage = (req, res) => {
    mydb.query("SELECT * FROM districts WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        if (!result[0]) return res.redirect("/api/districts");
        res.render("districts/destroy", { district: result[0] });
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM districts WHERE id = ?", [req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/api/districts");
    });
};
