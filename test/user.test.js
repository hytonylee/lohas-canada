const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const userData = {
	name: 'Jack Ryan',
	email: 'jryan@gmail.com',
	password: '556789'
};

describe('User Model Test', () => {
	// Connect to MongoDB Memeory Server
	beforeAll(async () => {
		await mongoose.connect(
			global.__MONGO_URI__,
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
		const validUser = new User(userData);
		const savedUser = await validUser.save();
		// Object Id should be defined when successfully saved to MongoDB.
		expect(savedUser._id).toBeDefined();
		expect(savedUser.name).toBe(userData.name);
		expect(savedUser.email).toBe(userData.email);
		expect(savedUser.password).toBe(userData.password);
	});

	// Test Schema is working!!!
	// You shouldn't be able to add in any field that isn't defined in the schema
	it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
		const userWithInvalidField = new User({
			name: 'Jack Ryan',
			email: 'jryan@gmail.om',
			password: '556789'
		});
		const savedUserWithInvalidField = await userWithInvalidField.save();
		expect(savedUserWithInvalidField._id).toBeDefined();
		expect(savedUserWithInvalidField.nickkname).toBeUndefined();
	});

	// Test Validation is working!!!
	// It should us told us the errors in on password field.
	it('create user without required field should failed', async () => {
		const userWithoutRequiredField = new User({ name: 'Jack Ryan' });
		let err;
		try {
			const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
			error = savedUserWithoutRequiredField;
		} catch (error) {
			err = error;
		}
		expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(err.errors.password).toBeDefined();
	});
});
