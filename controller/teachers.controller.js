import mydb from '../config/db.js';

export const index = (req, res) => {
    mydb.query("SELECT * FROM teachers", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

export const store = (req, res) => {
    const { registration_number, nic_number, first_name, last_name } = req.body;
    mydb.query("INSERT INTO teachers (registration_number, nic_number, first_name, last_name) VALUES (?, ?, ?, ?)", [registration_number, nic_number, first_name, last_name], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

export const update = (req, res) => {
    const { registration_number, nic_number, first_name, last_name } = req.body;
    mydb.query("UPDATE teachers SET registration_number=?, nic_number=?, first_name=?, last_name=? WHERE id=?", [registration_number, nic_number, first_name, last_name, req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

export const destroy = (req, res) => {
    mydb.query("DELETE FROM teachers WHERE id=?", [req.params.id], (err, result) => {
        if (err) throw err; 
         
        res.json(result);
    });
}

export const show = (req, res) => {
    mydb.query("SELECT * FROM teachers WHERE id=?",
        [req.params.id], (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    );
}