import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM students limit 10", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).render("students/index", { students: [], error: "Unable to load students.", title: "Students" });
        }
        res.render("student/index", { students: result, error: null, title: "Students" });
    });
};

export const create = (req, res) => {
    res.render("student/create", { title: "Add Student" });
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch student");
        }
        res.render("student/show", { student: result[0], title: "Student Details" });
    });
};

export const edit = (req, res) => {
    mydb.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch student");
        }
        res.render("student/update", { student: result[0], title: "Edit Student" });
    });
};

export const deleteView = (req, res) => {
    mydb.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to fetch student");
        }
        res.render("student/delete", { student: result[0], title: "Delete Student" });
    });
};

export const store = (req, res) => {

    const student = req.body;

    mydb.query(
        "INSERT INTO students SET ?",
        student,
        (err, result) => {

            if (err) throw err;

            res.redirect("/students");

        }
    );

};

// export const update = (req, res) => {

//     const { gn_code } = req.body;

//     mydb.query(
//         "UPDATE addresses SET gn_code = ? WHERE gn_id = ?",
//         [gn_code, req.params.id],
//         (err) => {

//             if (err) {
//                 console.error(err);
//                 return res.status(500).send("Failed to update address");
//             }

//             res.redirect("/addresses");
//         }
//     );
// };


export const update = (req, res) => {

    const student = req.body;

    mydb.query(
        "UPDATE students SET ? WHERE id=?",
        [student, req.params.id],
        (err, result) => {

            if (err) throw err;

            res.redirect("/students/" + req.params.id);

        }
    );

};

export const destroy = (req, res) => {
    mydb.query("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to delete student");
        }
        res.redirect("/students");
    });
};