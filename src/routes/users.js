import express from 'express';
import User from '../models/user.model';
import { validateUser, validateLogin } from '../validation/validate';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Create a user
router.post('/register', async (req, res) => {
	// Validate the data before create a user
	const { error } = validateUser(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if the email exists
	const emailExist = await User.findOne({
		email: req.body.email
	});
	if (emailExist) return res.status(400).send('Email is already existed!');

	// // Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	//Create a User
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashPassword
	});

	try {
		const saveUser = await newUser.save();
		// res.send(saveUser);
		res.send({ user: saveUser._id });
	} catch (err) {
		res.status(400).send('Error: ' + err);
	}
});

// Login
router.post('/login', async (req, res) => {
	// Check if the date is validate
	const { error } = validateLogin(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if the email exists
	const loginUser = await User.findOne({
		email: req.body.email
	});
	if (!loginUser)
		return res.status(400).send('Email or Password is incorrect!!');

	// Check if the password is correct
	const validPass = await bcrypt.compare(req.body.password, loginUser.password);
	if (!validPass)
		return res.status(400).send('Email or Password is incorrect!!');

	res.send('Logged in!!');
});

// Find a User
router.route('/:id').get((req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Get All User
router.route('/').get((req, res) => {
	User.find()
		.then(users =>
			res.send(
				users.map(user => {
					return user.username;
				})
			)
		)
		.catch(err => res.status(400).json('Error: ' + err));
});

// Delete a User
router.route('/:id').delete((req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(`${user.username} is deleted`))
		.catch(err => res.status(400).json('Error: ' + err));
});

export default router;
