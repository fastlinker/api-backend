const jwt = require('jsonwebtoken');

const db = require('../models/admin');

exports.admregister = async (req, res, next) => {
	try {
		const admin = await db.create(req.body);

		console.log(req.body);

		const { id, fullname,username,email,phone } = admin;

		const token = jwt.sign({ id,fullname, username,email,phone }, process.env.SECRET);

		res.status(201).json({ id,fullname,username,email,phone, token });
	} catch (err) {
		if (err.code === 11000) {
			err.message = 'Sorry, that username is already taken';
		}

		next(err);
	}
};

exports.login = async (req, res, next) => {
	try {
		const uname = req.body.username;
		const passwd = req.body.password;

		const user = await db.User.findOne({ username: uname });

		console.log(user);

		const { id, username } = user;
		const valid = await user.comparePassword(passwd);

		if (valid) {
			const token = jwt.sign({ id, username }, process.env.SECRET);

			res.status(200).json({ id, username, token });
		} else {
			throw new Error();
		}
	} catch (err) {
		err.message = 'Incorrect username or password';

		next(err);
	}
};
