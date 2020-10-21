import React, { Fragment } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Button, Typography, Container } from '@material-ui/core';

const ListRows = ({ list, title, clicked }) => {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 2,
		accessibility: true,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
	};
	const onClick = (id) => {
		clicked(id);
	};

	const listRow = list.map(({ title, url, _id }) => {
		return (
			<div className='card-wrapper' key={_id}>
				<div className='card'>
					<div className='cardTop'>
						<Typography variant='body2' component='h3'>
							{title}
						</Typography>
					</div>
					<img className='card_image' src={url} alt={title} />

					<Button
						type='submit'
						variant='contained'
						color='primary'
						onClick={() => onClick(_id)}
						className='btn-primary'>
						Remove
					</Button>
				</div>
			</div>
		);
	});

	return (
		<Fragment>
			{!list.length ? null : (
				<Container>
					<Typography variant='h4' color='secondary' component='h2'>
						{title}
					</Typography>

					<Slider {...settings}>{listRow}</Slider>
				</Container>
			)}
		</Fragment>
	);
};

ListRows.propTypes = {};

export default ListRows;
