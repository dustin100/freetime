import React, { Fragment } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ListRows = ({ list, title, clicked }) => {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: true,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
	};
	const onClick = (id) => {
		clicked(id);
	};

	const listRow = list.map(({ title, release, url, _id }) => {
		return (
			<div key={_id}>
				<div className='card'>
					<div className='cardTop'>
						<h2>{title}</h2>
						<p className='releaseYear'>{release}</p>
					</div>
					<img className='card_image' src={url} alt={title} />
					<div className='buttonGroup'>
						<button onClick={() => onClick(_id)} className='btn-primary'>
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

	return (
		<Fragment>
			{!list.length ? null : (
				<Fragment>
					<h2 className='medium text-primary'>{title}</h2>
					<Slider {...settings}>{listRow}</Slider>
				</Fragment>
			)}
		</Fragment>
	);
};

ListRows.propTypes = {};

export default ListRows;
