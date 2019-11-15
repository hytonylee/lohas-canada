import express from 'express';
import postRoute from './routes/post';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';

let app = express();

// middleware
app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`);
	console.log(process.env.MY_SECRET_ACCOUNT);
	console.log(process.env.MY_SECRET_ACCOUNT_PASSWORD);
	next();
});

app.use(postRoute);
app.use(express.static('public'));

// handle for 404
app.use((req, res, next) => {
	res.status(404).send('We think we are lost!');
});

// handle for 500
app.use((err, req, res, next) => {
	console.error(err.stack);

	res.sendFile(path.join(__dirname, '../public/500.html'));
});

app.listen(process.env.PORT, () => {
	console.log(`The App is listening on port ${process.env.PORT}`);
});
