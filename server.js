// Loading Libraries
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
	res.json({ msg: 'Welcome to the Lohas Farm Canada API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));

// Connect to Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port $${PORT}`));
