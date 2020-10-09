import React from 'react';

const Card = ({ title, release, length, rating, url, description, id }) => {
	return (
		<div className='card'>
			<div className='cardTop'>
				<h2>{title}</h2>
				<p className='releaseYear'>{release}</p>
			</div>
			<img className='card_image' src={url} alt={title} />
			<div className='buttonGroup'>
				<button className='btn-primary'>
					<i className='fas fa-plus'></i>
				</button>
				<button className='btn-primary'>
					<i className='fas fa-minus'></i>
				</button>
			</div>
		</div>
	);
};

export default Card;
