import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM families", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("families/index", { families: [], error: "Unable to load families.", title: "Families" });
        }
        res.render("families/index", { families: result, error: null, title: "Families" });
    });
};

export const create = (req, res) => {
    res.render("families/create", { title: "Add Family" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM families WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch family");
        }
        res.render("families/show", { family: result[0], title: "Family Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM families WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch family");
        }
        res.render("families/update", { family: result[0], title: "Edit Family" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM families WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch family");
        }
        res.render("families/delete", { family: result[0], title: "Delete Family" });
    });
};

export const store = (req, res) => {
    const family = req.body;
    mydb.query("INSERT INTO families SET ?", family, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create family");
        }
        res.redirect("/families");
    });
};

// export const update = (req, res) => {
//     const family = req.body;
//     mydb.query("UPDATE families SET ? WHERE id = ?", [family, req.params.id], (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Failed to update family");
//         }
//         res.redirect("/families");
//     });
// };


export const update = (req, res) => {

    const family = req.body;

    mydb.query(
        "UPDATE families SET ? WHERE id=?",
        [family, req.params.id],
        (err, result) => {

            if (err) throw err;

            res.redirect("/families/" + req.params.id);

        }
    );

};


export const destroy = (req, res) => {
    mydb.query("DELETE FROM families WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete family");
        }
        res.redirect("/families");
    });
};



