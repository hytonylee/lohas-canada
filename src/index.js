let express = require('express');
let app = express();
let postRoute = require('./routes/post');
let path = require('path');

// middleware
app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}
`);
	next();
});
app.use(postRoute);
app.use(express.static('public'));

// handle for 404
app.use((req, res, next) => {
	res.status(404).send('We think we are lost!');
});

// handle for 500
app.use((err, req, res, next) => {});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server has started on ${PORT}`));
