import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
			<div className="rmdb-header">
				<div className="rmdb-Header-content">
					<Link to="/">
					<img className='rmbd-logo' src='./images/reactMovie_logo.png' alt='rmdb-mlogo' />
					</Link>
					<img className='rmbd-tmdb-logo' src="./images/tmdb_logo.png" alt='tmdb-logo' />
				</div>
			</div>
		)
}

export default Header;