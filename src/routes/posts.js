import express from 'express';
import Post from '../models/post.model';
import verify from './verifyToken';

const router = express.Router();

// Get All Posts
router.get('/', verify, async (req, res) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (err) {
		res.status(400).send('Error: ' + err);
	}
});

// Get Single Post
router.get('/:id', verify, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.send(post);
	} catch (err) {
		res.status(400).send('Error: ' + err);
	}
});

// Add Posts
router.post('/add', verify, async (req, res) => {
	const newPost = new Post({
		title: req.body.title,
		content: req.body.content,
		type: req.body.type,
		image: req.body.image,
		date: Date.parse(req.body.date)
	});

	try {
		const savePost = await newPost.save();
		res.send(savePost);
	} catch (err) {
		res.status(400).send('Error: ' + err);
	}
});

// Delete a Post
router.delete('/:id', verify, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.send(`${post.title} is deleted`);
	} catch (err) {
		res.status(400).json('Error: ' + err);
	}
});

// Update a Post
router.route('/update/:id').post((req, res) => {
	Post.findById(req.params.id)
		.then(post => {
			post.title = req.body.title;
			post.type = req.body.type;
			post.image = req.body.image;
			post.content = req.body.content;
			post.date = req.body.date;

			post
				.save()
				.then(() => res.json(`The post, ${post.title}, has bee updated!'`))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

export default router;
