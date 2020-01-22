const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const userData = {
	name: 'Jack Ryan',
	email: 'j_ryan@gmail.com',
	password: '556789'
};

describe('User Model Test', () => {
	// Connect to MongoDB Memeory Server
	beforeAll(async () => {
		await mongoose.connect(
			global.MONGO_URI,
			{
				useNewUrlParser: true,
				useCreateIndex: true
			},
			err => {
				if (err) {
					console.error(err);
					process.exit(1);
				}
			}
		);
	});

	it('Create and Save User Successfully', async () => {
		const validUser = new UserModel(userData);
		const savedUser = await validUser.save();
		// Object Id should be defined when successfully saved to MongoDB.
		expect(savedUser._id).toBeDefined();
		expect(savedUser.name).toBe(userData.name);
		expect(savedUser.email).toBe(userData.email);
		expect(savedUser.password).toBe(userData.password);
	});
});
