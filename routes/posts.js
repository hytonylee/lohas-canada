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

// @route		Get api/posts/dashboard
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

// @route   Post api/posts/dashboard
// @desc    Add a post
// @access  Private
router.post(
	'/dashboard',
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

		const { title, section, status, imgUrl, content } = req.body;

		try {
			const newPost = new Post({
				title,
				section,
				status,
				imgUrl,
				content,
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

// @route		PUT api/posts/dashboard/:id
// @desc		Update a post
// @access	Private
router.put(
	'/dashboard/:id',
	[
		auth,
		[
			check('title', 'Title is required!')
				.not()
				.isEmpty(),
			check('content', 'Content is required!')
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, section, content, status } = req.body;

		const postFields = {};
		if (title) postFields.title = title;
		if (section) postFields.section = section;
		if (imgUrl) postFields.imgUrl = imgUrl;
		if (content) postFields.content = content;
		if (status) postFields.status = status;

		try {
			// Make sure the user's post exists
			let post = await Post.findById(req.params.id);
			if (!post) return res.json(404).json({ msg: 'Post not found!' });

			// Make sure the user own post
			if (post.user.toString() !== req.user.id) {
				return res.status(401).json({ msg: 'Not authorized!' });
			}

			// Update the user's post
			post = await Post.findByIdAndUpdate(
				req.params.id,
				{ $set: postFields },
				{ new: true }
			);
			res.json(post);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Post Update Error!');
		}
	}
);

// @route		DELETE api/posts/dashboard/:id
// @desc		Delete a post
// @access	Private
router.delete('/dashboard/:id', auth, async (req, res) => {
	try {
		let post = await Post.findById(req.params.id);
		if (!post) return res.status(404).json({ msg: 'Post not found!' });

		// Make sure user owns the post
		if (post.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized!!' });
		}

		await Post.findByIdAndRemove(req.params.id);
		res.json({ msg: 'Post has been removed!' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error!');
	}
});

module.exports = router;
