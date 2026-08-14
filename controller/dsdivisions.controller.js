import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("dsdivisions/index", { dsdivisions: [], error: "Unable to load ds divisions.", title: "DS Divisions" });
        }
        res.render("dsdivisions/index", { dsdivisions: result, error: null, title: "DS Divisions" });
    });
};

export const create = (req, res) => {
    res.render("dsdivisions/create", { title: "Add DS Division" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch dsdivision");
        }
        res.render("dsdivisions/show", { dsdivision: result[0], title: "DS Division Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch dsdivision");
        }
        res.render("dsdivisions/update", { dsdivision: result[0], title: "Edit DS Division" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM dsdivisions WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch dsdivision");
        }
        res.render("dsdivisions/delete", { dsdivision: result[0], title: "Delete DS Division" });
    });
};

export const store = (req, res) => {
    const dsdivision = req.body;
    mydb.query("INSERT INTO dsdivisions SET ?", dsdivision, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to create dsdivision");
        }
        res.redirect("/dsdivisions");
    });
};

// export const update = (req, res) => {
//     const dsdivision = req.body;
//     mydb.query("UPDATE dsdivisions SET ? WHERE id = ?", [dsdivision, req.params.id], (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Failed to update dsdivision");
//         }
//         res.redirect("/dsdivisions");
//     });
// };


export const update = (req, res) => {

    const dsdivision = req.body;

    mydb.query(
        "UPDATE dsdivisions SET ? WHERE id=?",
        [dsdivision, req.params.id],
        (err, result) => {

            if (err) throw err;

            res.redirect("/dsdivisions/" + req.params.id);

        }
    );

};



export const destroy = (req, res) => {
    mydb.query("DELETE FROM dsdivisions WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete dsdivision");
        }
        res.redirect("/dsdivisions");
    });
};



