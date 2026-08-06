import mydb from "../config/db.js";

export const index = (req, res) => {
  mydb.query("SELECT * FROM families", (err, result) => {
    if (err) throw err;
    res.render("families/index", { families: result });
  });
};

export const create = (req, res) => {
  res.render("families/create");
};

export const store = (req, res) => {
  const family = {
    name: req.body.name,
    relationship: req.body.relationship || null,
    phone: req.body.phone || null,
    address: req.body.address || null,
    student_id: req.body.student_id || null
  };

  mydb.query("INSERT INTO families SET ?", family, (err) => {
    if (err) throw err;
    res.redirect('/api/families');
  });
};

export const show = (req, res) => {
  mydb.query("SELECT * FROM families WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.render('families/show', { family: result[0] });
  });
};

export const edit = (req, res) => {
  mydb.query("SELECT * FROM families WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.render('families/update', { family: result[0] });
  });
};

export const update = (req, res) => {
  const family = {
    name: req.body.name,
    relationship: req.body.relationship || null,
    phone: req.body.phone || null,
    address: req.body.address || null,
    student_id: req.body.student_id || null
  };

  mydb.query("UPDATE families SET ? WHERE id = ?", [family, req.params.id], (err) => {
    if (err) throw err;
    res.redirect(`/api/families/${req.params.id}`);
  });
};

export const destroyPage = (req, res) => {
  mydb.query("SELECT * FROM families WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    if (!result[0]) return res.redirect('/api/families');
    res.render('families/destroy', { family: result[0] });
  });
};

export const destroy = (req, res) => {
  mydb.query("DELETE FROM families WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/api/families');
  });
};
