const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');

// @route   Get api/posts
// @desc    Get all published posts
// @access  Public
router.get('/', async (req, res) => {
	try {
		const posts = await Post.find({ status: 'published' }).sort({
			date: -1
		});
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error: Unable loading post data.');
	}
});

// @route		Get api/posts (published and draft)
// @desc		Get all published and draft posts
// @access  Private
router.get('/dashboard', auth, async (req, res) => {
	try {
		const posts = await Post.find({ user: req.user.id }).sort({ date: -1 });
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error: Unable loading post data');
	}
});

// @route   Post api/posts
// @desc    Add a post
// @access  Private
router.post(
	'/',
	[
		auth,
		[
			check('title', 'Title is required!')
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, section, status } = req.body;

		try {
			const newPost = new Post({
				title,
				section,
				status,
				user: req.user.id
			});

			const post = await newPost.save();
			res.json(post);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Unable to Save the Post!');
		}
	}
);

module.exports = router;
