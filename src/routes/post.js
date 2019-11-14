let express = require('express');
let router = express.Router();

// Querytring => query property on the request object
// locathost:4000/post?title=tomas&category=product
router.get('/post/', (req, res) => {
	if (req.query.title) {
		res.send(`You have requst a post ${req.query.title}`);
	} else {
		res.send('You have request a post.');
	}
});

// Params property on the request object
router.get('/post/:title', (req, res) => {
	res.send(`You have a request a post ${req.params.title}`);
});

router.get('/error', (req, res) => {
	throw new Error('This is forced error!!');
});

module.exports = router;
