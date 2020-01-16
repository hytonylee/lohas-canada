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
		enum: ['front page', 'blog'],
		default: 'blog',
		required: true
	},
	status: {
		type: String,
		enum: ['published', 'draft'],
		default: 'draft',
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
	// timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('post', PostSchema);
