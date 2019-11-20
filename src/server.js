import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
	// reconnectTries: 30,
	// reconnectInterval: 500 // in ms
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established!');
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
