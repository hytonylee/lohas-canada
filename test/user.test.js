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

	// Test Schema is working!!!
	// You shouldn't be able to add in any field that isn't defined in the schema
	it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
		const userWithInvalidField = new UserModel({
			name: 'TekLoon',
			gender: 'Male',
			nickname: 'Handsome TekLoon'
		});
		const savedUserWithInvalidField = await userWithInvalidField.save();
		expect(savedUserWithInvalidField._id).toBeDefined();
		expect(savedUserWithInvalidField.nickkname).toBeUndefined();
	});

	// Test Validation is working!!!
	// It should us told us the errors in on gender field.
	it('create user without required field should failed', async () => {
		const userWithoutRequiredField = new UserModel({ name: 'TekLoon' });
		let err;
		try {
			const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
			error = savedUserWithoutRequiredField;
		} catch (error) {
			err = error;
		}
		expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(err.errors.gender).toBeDefined();
	});
});
