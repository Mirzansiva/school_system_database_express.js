import mydb from "../config/db.js";

export const index = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions", (err, result) => {
        if (err) throw err;
        res.render("dsdivisions/index", { dsdivisions: result });
    });
};

export const create = (req, res) => {
    res.render("dsdivisions/create");
};

export const store = (req, res) => {
    const dsdivision = req.body;
    mydb.query("INSERT INTO dsdivisions SET ?", dsdivision, (err) => {
        if (err) throw err;
        res.redirect("/api/dsdivisions");
    });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("dsdivisions/show", { dsdivision: result[0] });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.render("dsdivisions/update", { dsdivision: result[0] });
    });
};

export const update = (req, res) => {
    const dsdivision = req.body;
    mydb.query("UPDATE dsdivisions SET ? WHERE id = ?", [dsdivision, req.params.id], (err) => {
        if (err) throw err;
        res.redirect(`/api/dsdivisions/${req.params.id}`);
    });
};

export const destroyPage = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err;
        if (!result[0]) return res.redirect("/api/dsdivisions");
        res.render("dsdivisions/destroy", { dsdivision: result[0] });
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM dsdivisions WHERE id = ?", [req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/api/dsdivisions");
    });
};
