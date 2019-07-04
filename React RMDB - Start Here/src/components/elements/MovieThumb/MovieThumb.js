import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
	return (
		<div className="rmbd-moviethumb">
			<img src={props.image} alt="MovieThumb" />
			
		</div>
		)
}

export default MovieThumb;