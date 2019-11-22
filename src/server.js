// Librarise
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

// Routes
import usersRouter from './routes/users';
import authRouter from './routes/auth';
import postsRouter from './routes/posts';

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// connect to DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established!!');
});

// Router to Middlewares
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/register', authRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
