import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM districts", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("districts/index", { districts: [], error: "Unable to load districts.", title: "Districts" });
        }
        res.render("districts/index", { districts: result, error: null, title: "Districts" });
    });
};

export const create = (req, res) => {
    res.render("districts/create", { title: "Add District" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM districts WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch district");
        }
        res.render("districts/show", { district: result[0], title: "District Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM districts WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch district");
        }
        res.render("districts/update", { district: result[0], title: "Edit District" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM districts WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch district");
        }
        res.render("districts/delete", { district: result[0], title: "Delete District" });
    });
};

export const store = (req, res) => {
    const { province_id, code, name } = req.body;
    mydb.query("INSERT INTO districts (province_id, code, name) VALUES (?, ?, ?)", [province_id, code, name], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create district");
        }
        res.redirect("/districts");
    });
};

export const update = (req, res) => {
    const { province_id, code, name } = req.body;
    mydb.query("UPDATE districts SET province_id = ?, code = ?, name = ? WHERE id = ?", [province_id, code, name, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to update district");
        }
        res.redirect("/districts");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM districts WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete district");
        }
        res.redirect("/districts");
    });
};



