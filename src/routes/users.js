import express from 'express';
import User from '../models/user.model';
import verify from './verifyToken';

const router = express.Router();

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
