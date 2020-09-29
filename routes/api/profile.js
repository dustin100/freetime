const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.user.id,
		}).populate('user', ['name', 'avatar']);

		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route Post api/profile
// @desc Update User profile
// @access Private
router.post(
	'/',
	[auth, [check('name', 'Name is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, movies, videogames, books } = req.body;
		const profileFields = {};
		profileFields.user = req.user.id;
		if (movies) profileFields.movies = movies;
		if (videogames) profileFields.videogames = videogames;
		if (books) profileFields.books = books;
		if (name) profileFields.name = name;

		try {
			let profile = await Profile.findOne({ user: req.user.id });

			if (profile) {
				// Update
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				);
				return res.json(profile);
			}

			profile = new Profile(profileFields);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route DELETE api/profile/
// @desc Delete profile, user, and post
// @access private

router.delete('/', auth, async (req, res) => {
	try {
		// Remove Posts
		await Post.deleteMany({ user: req.user.id });
		// Remove Profile
		await Profile.findOneAndRemove({ user: req.user.id });
		// Remove the user
		await User.findOneAndRemove({ _id: req.user.id });

		res.json({ msg: 'user removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Sever Error');
	}
});

// @route PUT api/profile//movies
// @desc Add profile movies
// @access private

router.put(
	'/movies',
	[
		auth,
		[
			check('title', 'Title is required').not().isEmpty(),
			check('release', 'Release is required').not().isEmpty(),
			check('length', 'Length is required').not().isEmpty(),
			check('rating', 'Rating is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { title, release, length, rating, description, url } = req.body;

		const newMovie = {
			title,
			release,
			length,
			rating,
			description,
			url,
		};

		try {
			const profile = await Profile.findOne({ user: req.user.id });
			profile.movies.unshift(newMovie);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Sever Error');
		}
	}
);

// @route PUT api/profile//books
// @desc Add profile books
// @access private

router.put(
	'/books',
	[
		auth,
		[
			check('title', 'Title is required').not().isEmpty(),
			check('release', 'Release is required').not().isEmpty(),
			check('length', 'Length is required').not().isEmpty(),
			check('rating', 'Rating is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { title, release, length, rating, description, url } = req.body;

		const newBook = {
			title,
			release,
			length,
			rating,
			description,
			url,
		};

		try {
			const profile = await Profile.findOne({ user: req.user.id });
			profile.books.unshift(newBook);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Sever Error');
		}
	}
);
// @route PUT api/profile//videogames
// @desc Add profile videogames
// @access private

router.put(
	'/videogames',
	[
		auth,
		[
			check('title', 'Title is required').not().isEmpty(),
			check('release', 'Release is required').not().isEmpty(),
			check('length', 'Length is required').not().isEmpty(),
			check('rating', 'Rating is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { title, release, length, rating, description, url } = req.body;

		const newBook = {
			title,
			release,
			length,
			rating,
			description,
			url,
		};

		try {
			const profile = await Profile.findOne({ user: req.user.id });
			profile.videogames.unshift(newBook);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Sever Error');
		}
	}
);

// @route DELETE api/profile/books/:bk_id
// @desc delete profile books
// @access private

router.delete('/books/:bk_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		// Get remove index
		const removeIndex = profile.books
			.map((item) => item.id)
			.indexOf(req.params.bk_id);

		profile.books.splice(removeIndex, 1);
		await profile.save();
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Sever Error');
	}
});

// @route DELETE api/profile/movies/:mv_id
// @desc delete profile movies
// @access private

router.delete('/movies/:mv_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		// Get remove index
		const removeIndex = profile.movies
			.map((item) => item.id)
			.indexOf(req.params.mv_id);

		profile.movies.splice(removeIndex, 1);
		await profile.save();
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Sever Error');
	}
});

// @route DELETE api/profile/videogames/:vg_id
// @desc delete profile videogames
// @access private

router.delete('/videogames/:vg_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		// Get remove index
		const removeIndex = profile.videogames
			.map((item) => item.id)
			.indexOf(req.params.vg_id);

		profile.videogames.splice(removeIndex, 1);
		await profile.save();
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Sever Error');
	}
});

module.exports = router;
