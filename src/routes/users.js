import express from 'express';
import User from '../models/user.model';
import { validateUser, validateLogin } from '../validation/validate';

const router = express.Router();

// Create a user
router.route('/add').post((req, res) => {
	// Validate the data before create a user
	const { error } = validateUser(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if the email exists
	const emailExist = User.find({ email: req.body.email });
	if (emailExist) return res.status(400).send('Email is already existed!');

	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;

	//Create a User
	const newUser = new User({ username, email, password });
	newUser
		.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
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
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Delete a User
router.route('/:id').delete((req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(`${user.username} is deleted`))
		.catch(err => res.status(400).json('Error: ' + err));
});

export default router;
