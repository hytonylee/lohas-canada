const mongoose = require('mongoose');
const Post = require('../models/Post');
require('dotenv').config();

const postData = {
	title: 'Company Product',
	section: 'front page',
	status: 'published',
	content: 'This is about the about the product.'
};

describe('Post Model Test', () => {
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

	it('Create and Save Post Successfully', async () => {
		const validPost = new Post(postData);
		const savedPost = await validPost.save();
		// Object Id should be defined when successfully saved to MongoDB.
		expect(savedPost._id).toBeDefined();
		expect(savedPost.title).toBe(postData.title);
		expect(savedPost.section).toBe(postData.section);
		expect(savedPost.status).toBe(postData.status);
		expect(savedPost.content).toBe(postData.content);
	});

	// Test Schema is working!!!
	// You shouldn't be able to add in any field that isn't defined in the schema
	it('insert post successfully, but the field does not defined in schema should be undefined', async () => {
		const userWithInvalidField = new Post({
			title: 'Company Product',
			section: 'front page',
			status: 'published',
			content: 'This is about the about the product.'
		});
		const savedUserWithInvalidField = await userWithInvalidField.save();
		expect(savedUserWithInvalidField._id).toBeDefined();
		expect(savedUserWithInvalidField.tag).toBeUndefined();
	});

	// Test Validation is working!!!
	// It should us told us the errors in on status field.
	it('create post without required field should failed', async () => {
		const userWithoutRequiredField = new Post({ title: 'Company Product' });
		let err;
		try {
			const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
			error = savedUserWithoutRequiredField;
		} catch (error) {
			err = error;
		}
		expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(err.errors.title).toBeDefined();
	});
});
