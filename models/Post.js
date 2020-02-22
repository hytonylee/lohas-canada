const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
	name: String
});

const PostSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	title: {
		type: String,
		required: true
	},
	homeSlide: {
		type: Boolean,
		required: true,
		default: false
	},
	section: {
		type: String,
		default: 'blog',
		required: true
	},
	imgUrl: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: 'draft',
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	tags: [TagSchema]
});

module.exports = mongoose.model('post', PostSchema);
