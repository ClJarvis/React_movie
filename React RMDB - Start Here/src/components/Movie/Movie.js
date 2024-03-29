import React, { Component } from 'react' ;
import { API_URL, API_KEY } from '../../config';
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';


class Movie extends Component {
	state = {
		movie: null,
		actors: null,
		directors:  [],
		loading: false
	}

componentDidMount() {

	    // ES6 destructuring the props
    const { movieId } = this.props.match.params;

	if (localStorage.getItem(`${movieId}`)) {
		const state = JSON.parse(localStorage.getItem(`${movieId}`));
		this.setState({...state});
	} else {
	this.setState({ loading: true})
	//fetch the movie
	const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`; 
	this.fetchItems(endpoint);
	}
}

	fetchItems = (endpoint) => {

		const { movieId } = this.props.match.params;

		fetch(endpoint)
		.then(result => result.json())
		.then(result => {

			 if(result.status_code){
			 	this.setState({ loading: false});
			 } else {
			 	this.setState({movie: result}, () => {
			 		//... the fetch actors in setstate
			 		let endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
			 		fetch(endpoint)
			 			.then(result =>result.json())
			 			.then(result => {
			 				const directors = result.crew.filter( (member) => member.job === "Director");

			 				this.setState({
			 					actors: result.cast,	
			 					directors: directors,
			 					loading: false
			 				}, () => { 
			 					localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
			 			  })
			 			})
			 		})
			 }
		}) 
		.catch(error => console.error('Error:', error));
	}
	render() {
    // ES6 Destructuring the props and state
    const { movieName } = this.props.location;
    const { movie, directors, actors, loading } = this.state;
	return (
		<div className='rmbd-movie'>
			{movie ?
			<div>
				<Navigation movie={movieName} />
				<MovieInfo movie={movie}  directors={directors} />
				<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
			</div>
			: null }
			{this.state.actors ? 
				<div className="rmbd-movie-grid">
					<FourColGrid header={'Actors'}> 
						
						{actors.map( (element, i) => {
							return <Actor key={i} actor={element} />
						})}
					</FourColGrid >
				</div>
		:null }
		 	{!actors && !loading ?  <h1>No Movie Found!</h1> : null }	
		 	{loading ? <Spinner /> : null}
		}
	</div>
		)
}
}

export default Movie;