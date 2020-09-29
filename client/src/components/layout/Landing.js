import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>Free Time</h1>
					<p className='lead'>
						Setup a profile to keep track of all the things you want to do in
						your free time
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-primary'>
							Sign Up
						</Link>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
