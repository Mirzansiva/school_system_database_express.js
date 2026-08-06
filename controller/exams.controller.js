import mydb from '../config/db.js';

export const index = (req, res) => {
	mydb.query("SELECT * FROM exams", (err, result) => {
		if (err) throw err;
		res.render("exams/index", { exams: result });
	});
}

export const create = (req, res) => {
	res.render("exams/create");
}

export const store = (req, res) => {
	const exam = {
		name: req.body.name,
		date: req.body.date || null,
		description: req.body.description || null
	};

	mydb.query("INSERT INTO exams SET ?", exam, (err) => {
		if (err) throw err;
		res.redirect('/api/exams');
	});
};

export const show = (req, res) => {
	mydb.query("SELECT * FROM exams WHERE id = ?", [req.params.id], (err, result) => {
		if (err) throw err;
		res.render('exams/show', { exam: result[0] });
	});
}

export const edit = (req, res) => {
	mydb.query("SELECT * FROM exams WHERE id = ?", [req.params.id], (err, result) => {
		if (err) throw err;
		res.render('exams/update', { exam: result[0] });
	});
}

export const update = (req, res) => {
	const exam = {
		name: req.body.name,
		date: req.body.date || null,
		description: req.body.description || null
	};

	mydb.query("UPDATE exams SET ? WHERE id = ?", [exam, req.params.id], (err) => {
		if (err) throw err;
		res.redirect(`/api/exams/${req.params.id}`);
	});
}

export const destroyPage = (req, res) => {
	mydb.query("SELECT * FROM exams WHERE id = ?", [req.params.id], (err, result) => {
		if (err) throw err;
		if (!result[0]) return res.redirect('/api/exams');
		res.render('exams/destroy', { exam: result[0] });
	});
}

export const destroy = (req, res) => {
	mydb.query("DELETE FROM exams WHERE id = ?", [req.params.id], (err) => {
		if (err) throw err;
		res.redirect('/api/exams');
	});
}

