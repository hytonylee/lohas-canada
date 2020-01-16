const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	title: {
		type: String,
		required: true
	},
	section: {
		type: String,
		enum: ['front', 'blog'],
		default: 'blog',
		required: true
	},
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
});

module.exports = mongoose.model('post', PostSchema);
