import React from "react";
import MovieCarousel from "../Components/MovieCarousel.jsx";
import * as mav from "../variables/movie-api-vars";
import * as gv from "../variables/global-vars";

class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           trendingMovies: []
        };
        
        this.getTrendingMovies(mav.MEDIA_TYPE.all, mav.TIME_WINDOW.day);
    }
    
    getTrendingMovies(mediaType, time) {
        // Returns a list of trending movies
        // mediaType: The type of media to display (all, movie, tv, person)
        // time: Whether to display the trending list for the "day" or the "week"
        
        // If mediaType or time is not correct, return an empty object
        if (!Object.values(mav.MEDIA_TYPE).includes(mediaType) || !Object.values(mav.TIME_WINDOW).includes(time)) return {};
        
        // Fetch the trending movies and add them to a carousel
        fetch(`${gv.MOVIE_API_URL}/trending/${mediaType}/${time}?api_key=${process.env.MOVIE_API_KEY}`)
        .then( results => results.json())
        .then(data => {
            this.setState({
                trendingMovies: data.results
            });
        });
    }
    
	render() {
		return (
			<>
                <MovieCarousel heading="Trending" movies={this.state.trendingMovies} />
            </>
		  );
	}
};

export default Home;