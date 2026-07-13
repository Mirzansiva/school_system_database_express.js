import  mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM provinces", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
};

export const show = (req, res) => {
    mydb.query("SELECT * FROM provinces WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    )
}

export const store = (req, res) => {
    const province = req.body;
    mydb.query("INSERT INTO provinces SET ?", province, (err, result) => {
        if (err) throw err;
        res.json({ message: "Province created successfully" });
    });
}

export const update = (req, res) => {
    const province = req.body;
    mydb.query("UPDATE provinces SET ? WHERE id=?",
        [province, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Province updated successfully" });
        }
    );
}

export const destroy = (req, res) => {
    mydb.query("DELETE FROM provinces WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Province deleted successfully." });
        }
    );
}