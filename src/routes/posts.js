import express from 'express';
import Post from '../models/post.model';
import verify from './verifyToken';

const router = express.Router();

router.get('/', verify, async (req, res) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (err) {
		res.status(400).send('Error: ' + err);
	}
});

router.route('/add').post((req, res) => {
	const title = req.body.title;
	const content = req.body.content;
	const type = req.body.type;
	const image = req.body.image;
	const date = Date.parse(req.body.date);
	const newPost = new Post({ title, type, image, content, date });
	newPost
		.save()
		.then(() => res.json(`${newPost.title} has been added.`))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Post.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Post.findById(req.params.id)
		.then(post => res.json(`${post.title} is deleted`))
		.catch(err => res.status(400).json('Error: ' + err));
});

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

// module.exports = router;

export default router;
