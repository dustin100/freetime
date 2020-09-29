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

	movies: [
		{
			title: {
				type: String,
				required: true,
			},
			release: {
				type: Date,
				required: true,
			},
			length: {
				type: String,
				required: true,
			},
			rating: {
				type: String,
				required: true,
			},
			url: {
				type: String,
			},
			description: {
				type: String,
			},
		},
	],
	books: [
		{
			title: {
				type: String,
				required: true,
			},
			release: {
				type: Date,
				required: true,
			},
			length: {
				type: String,
				required: true,
			},
			rating: {
				type: String,
				required: true,
			},
			url: {
				type: String,
			},
			description: {
				type: String,
			},
		},
	],
	videogames: [
		{
			title: {
				type: String,
				required: true,
			},
			release: {
				type: Date,
				required: true,
			},
			length: {
				type: String,
				required: true,
			},
			rating: {
				type: String,
				required: true,
			},
			url: {
				type: String,
			},
			description: {
				type: String,
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
