import express from 'express';
import User from '../models/user.model';

// //Validation Import
import Joi from '@hapi/joi';
// const Joi = require('@hapi/joi');

const schema = Joi.object({
	email: Joi.string()
		.min(6)
		.required()
		.email(),
	username: Joi.string()
		.min(6)
		.required(),
	password: Joi.string()
		.min(6)
		.required()
});

const router = express.Router();

// const router = require('express').Router();
// let User = require('../models/user.model');

router.route('/').get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	// const validation = Joi.validate(req.body, schema);
	const validation = schema.validate(req.body);
	res.send(validation);

	// const username = req.body.username;
	// const email = req.body.email;
	// const password = req.body.password;

	// const newUser = new User({ username, email, password });
	// newUser
	// 	.save()
	// 	.then(() => res.json('User added!'))
	// 	.catch(err => res.status(400).json('Error: ' + err));
});

// module.exports = router;
export default router;
