import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const MyList = ({
	profile: {
		profile: { movies, books, videogames },
	},
}) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		accessibility: true,
		variableWidth: true,
	};

	const onClick = () => {
		console.log('something');
	};
	const createList = (arr) => {
		const list = arr.map(({ title, release, url }) => {
			return (
				<div>
					<div className='card'>
						<div className='cardTop'>
							<h2>{title}</h2>
							<p className='releaseYear'>{release}</p>
						</div>
						<img className='card_image' src={url} alt={title} />
						<div className='buttonGroup'>
							<button onClick={onClick} className='btn-primary'>
								<i className='fas fa-plus'></i>
							</button>
							<button className='btn-primary'>
								<i className='fas fa-minus'></i>
							</button>
						</div>
					</div>
				</div>
			);
		});
		return list;
	};

	const movieList = createList(movies);
	const bookList = createList(books);
	const gameList = createList(videogames);

	return (
		<Fragment>
            <h2>Movies</h2>
			<Slider {...settings}>{movieList}</Slider>
            <h2>Books</h2>
			<Slider {...settings}>{movieList}</Slider>
            <h2>Video Games</h2>
			<Slider {...settings}>{movieList}</Slider>
		</Fragment>
	);
};

MyList.propTypes = {};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps)(MyList);
