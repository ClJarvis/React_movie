import React from 'react';
import { Link } from 'react-router-dom'
import './MovieThumb.css';

const MovieThumb = (props) => {
	return (
		<div className="rmbd-moviethumb">
			{props.clickable ?
				<Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
				 <img src={props.image} alt="MovieThumb" />
				</Link>
				:
				 <img src={props.image} alt="MovieThumb" />
			}
			
		</div>
		)
}

export default MovieThumb;