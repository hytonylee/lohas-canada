import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
			trim: true, // trim white space at the end
			minlength: 3
		},
		image: { type: String },
		type: { type: String, required: true },
		content: {
			type: String,
			required: true,
			minlength: 10
		},
		date: {
			type: Date,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Post = mongoose.model('Post', postSchema);

export default Post;
// module.exports = Post;
