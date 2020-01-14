// Loading Libraries
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect to Database
connectDB();

// Init Middleware
app.get('/', (req, res) =>
	res.json({ msg: 'Welcome to the Lohas Farm Canada API...' })
);

// Connect to Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port $${PORT}`));
