const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},

	name: {
		type: String,
		required: true,
	},

	movies: {
		type: [Object],
	},
	books: {
		type: [Object],
	},
	videogames: {
		type: [Object],
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
