import mydb from '../config/db.js';

export const index = (req, res) => {
    const q = 'SELECT * FROM gndivisions';
    mydb.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
}

export const show = (req, res) => {
    const q = 'SELECT * FROM gndivisions WHERE id = ?';
    mydb.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data[0]);
    });
}

export const store = (req, res) => {
    const q = 'INSERT INTO gndivisions (`gn_name`, `ds_division_id`) VALUES (?)';
    const values = [req.body.gn_name, req.body.ds_division_id];
    mydb.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({ message: 'GN Division created successfully', id: data.insertId });
    });
}

export const update = (req, res) => {
    const q = 'UPDATE gndivisions SET `gn_name` = ?, `ds_division_id` = ? WHERE id = ?';
    const values = [req.body.gn_name, req.body.ds_division_id, req.params.id];
    mydb.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({ message: 'GN Division updated successfully' });
    });
}

export const destroy = (req, res) => {
    const q = 'DELETE FROM gndivisions WHERE id = ?';
    mydb.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({ message: 'GN Division deleted successfully' });
    });
}