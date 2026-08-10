import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM provinces", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("provinces/index", { provinces: [], error: "Unable to load provinces.", title: "Provinces" });
        }
        res.render("provinces/index", { provinces: result, error: null, title: "Provinces" });
    });
};

export const create = (req, res) => {
    res.render("provinces/create", { title: "Add Province" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM provinces WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch province");
        }
        res.render("provinces/show", { province: result[0], title: "Province Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM provinces WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch province");
        }
        res.render("provinces/update", { province: result[0], title: "Edit Province" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM provinces WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch province");
        }
        res.render("provinces/delete", { province: result[0], title: "Delete Province" });
    });
};

export const store = (req, res) => {
    const { name } = req.body;
    mydb.query("INSERT INTO provinces (name) VALUES (?)", [name], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create province");
        }
        res.redirect("/provinces");
    });
};

export const update = (req, res) => {
    const { name } = req.body;
    mydb.query("UPDATE provinces SET name = ? WHERE id = ?", [name, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to update province");
        }
        res.redirect("/provinces");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM provinces WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete province");
        }
        res.redirect("/provinces");
    });
};



