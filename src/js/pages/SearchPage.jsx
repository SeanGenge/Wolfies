import React from "react";
import { functionWrapper } from '../utility/functionWrapper';
import * as search from "../utility/search";
import MovieCard from '../Components/MovieCard.jsx';
import MovieCard_Offcanvas from "../Components/Mobile/MovieCard_Offcanvas.jsx";
import MovieCard_Modal from "../Components/MovieCard_Modal.jsx";

class Search extends React.Component {
	constructor(props) {
		super(props);
		
		// Retrieve the params
		let { searchTerm } = this.props.params;
		
		this.state = {
			searchTerm: searchTerm,
			searchedMovies: []
		};
		
		this.searchMovies = this.searchMovies.bind(this);
		this.searchMovies();
	}
	
	async searchMovies() {
		let { searchTerm } = this.state;
		let searchedMovies = await search.searchMovies(searchTerm, 1);
		searchedMovies.results = searchedMovies.results.filter(movie => movie.poster_path !== null);
		
		this.setState({
			searchedMovies: searchedMovies
		});
	}
	
	render() {
		let searchedMovieCards = [];
		let { searchedMovies } = this.state;
		
		if (!searchedMovies || !searchedMovies?.results?.length) return;

		for (let i = 0; i < searchedMovies.results.length; i++) {
			let movie = searchedMovies.results[i];
			
			searchedMovieCards.push(<MovieCard key={i} movieData={movie} />);
		}
		
		return (
			<>
				<div className="search-container">
					{searchedMovieCards}
				</div>
				<MovieCard_Offcanvas />
				<MovieCard_Modal />
			</>
		  );
	}
};

export default functionWrapper(Search);