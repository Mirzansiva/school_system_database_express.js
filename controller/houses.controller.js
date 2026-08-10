import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM houses", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("houses/index", { houses: [], error: "Unable to load houses.", title: "Houses" });
        }
        res.render("houses/index", { houses: result, error: null, title: "Houses" });
    });
};

export const create = (req, res) => {
    res.render("houses/create", { title: "Add House" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM houses WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch house");
        }
        res.render("houses/show", { house: result[0], title: "House Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM houses WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch house");
        }
        res.render("houses/update", { house: result[0], title: "Edit House" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM houses WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch house");
        }
        res.render("houses/delete", { house: result[0], title: "Delete House" });
    });
};

export const store = (req, res) => {
    const house = req.body;
    mydb.query("INSERT INTO houses SET ?", house, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create house");
        }
        res.redirect("/houses");
    });
};

export const update = (req, res) => {
    const house = req.body;
    mydb.query("UPDATE houses SET ? WHERE id = ?", [house, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to update house");
        }
        res.redirect("/houses");
    });
};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM houses WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete house");
        }
        res.redirect("/houses");
    });
};



