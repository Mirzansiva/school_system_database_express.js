import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM gndivisions", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("gndivisions/index", { gndivisions: [], error: "Unable to load GN divisions.", title: "GN Divisions" });
        }
        res.render("gndivisions/index", { gndivisions: result, error: null, title: "GN Divisions" });
    });
};

export const create = (req, res) => {
    res.render("gndivisions/create", { title: "Add GN Division" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM gndivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch gndivision");
        }
        res.render("gndivisions/show", { gndivision: result[0], title: "GN Division Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM gndivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch gndivision");
        }
        res.render("gndivisions/update", { gndivision: result[0], title: "Edit GN Division" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM gndivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch gndivision");
        }
        res.render("gndivisions/delete", { gndivision: result[0], title: "Delete GN Division" });
    });
};

export const store = (req, res) => {
    const gndivision = req.body;
    mydb.query("INSERT INTO gndivisions SET ?", gndivision, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create gndivision");
        }
        res.redirect("/gndivisions");
    });
};

// export const update = (req, res) => {
//     const gndivision = req.body;
//     mydb.query("UPDATE gndivisions SET ? WHERE id = ?", [gndivision, req.params.id], (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Failed to update gndivision");
//         }
//         res.redirect("/gndivisions");
//     });
// };


export const update = (req, res) => {

    const gndivision = req.body;

    mydb.query(
        "UPDATE gndivisions SET ? WHERE id=?",
        [gndivision, req.params.id],
        (err, result) => {

            if (err) throw err;

            res.redirect("/gndivisions/" + req.params.id);

        }
    );

};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM gndivisions WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete gndivision");
        }
        res.redirect("/gndivisions");
    });
};



