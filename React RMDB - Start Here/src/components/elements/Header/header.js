import React from 'react';
import './Header.css';

const Header = () => {
	return (
			<div className="rmdb-header">
				<div className="rmdb-Header-content">
					<img className='rmbd-logo' src='./images/reactMovie_logo.png' alt='rmdb mlogo' />
					<img className='rmbd-tmdb-logo' src="./images/tmdb_logo.png" alt='tmdb-logo' />
				</div>
			</div>
		)
}

export default Header;