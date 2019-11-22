import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true, // trim white space at the end
			minlength: 3,
			maxlength: 255
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 5,
			maxlength: 255
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 1024
		}
	},
	{
		timestamps: true
	}
);

const User = mongoose.model('User', userSchema);
module.exports = User;
