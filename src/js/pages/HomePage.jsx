import React from "react";
import * as mav from "../variables/movie-api-vars";
import * as search from "../utility/search";
import MovieCarousel from "../Components/MovieCarousel.jsx";
import Footer from "../Components/footer.jsx";

class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           trendingMovies: [],
           movieGenres: [],
           tvGenres: [],
           // A dictionary of genre id as key and movies as value
           genreMovies: {},
           numGenreCarousels: 5
        };
        
        // Bind this to required functions
        this.getMovieGenres = this.getMovieGenres.bind(this);
        this.updateGenreMovies = this.updateGenreMovies.bind(this);
        this.getTvGenres = this.getTvGenres.bind(this);
        this.getTrendingMovies = this.getTrendingMovies.bind(this);
        this.getRandomMovieGenres = this.getRandomMovieGenres.bind(this);
        
        this.getMovieGenres();
        this.getTvGenres();
        this.getTrendingMovies(mav.MEDIA_TYPE.movie, mav.TIME_WINDOW.day);
    }
    
    async getMovieGenres() {
        // Returns and stores a list of movie genres
        let movieGenres = await search.getMovieGenres()
        .then(data => {
            this.updateGenreMovies(data.genres);
            // Have to return data so movieGenres is not undefined
            return data.genres;
        });
        
        this.setState({
            movieGenres: movieGenres
        });
        
        return movieGenres;
    }
    
    async updateGenreMovies(movieGenres) {
        let randomMovieGenres = this.getRandomMovieGenres(movieGenres, this.state.numGenreCarousels);
        
        // Setup genreMovies to display the movies in a carousel
        randomMovieGenres.forEach(async rGenre => {
            let movies = await search.getMoviesByGenreIds([rGenre.id]);
            
            // Need to get prevState since setState is async
            this.setState(prevState => ({
                genreMovies: {...prevState.genreMovies, [`${rGenre.name},${rGenre.id}`]: movies.results}
            }));
        });
    }
    
    async getTvGenres() {
        // Returns and stores a list of movie genres
        let tvGenres = await search.getTvGenres();
        
        this.setState({
            tvGenres: tvGenres.genres
        });
        
        return tvGenres;
    }
    
    async getTrendingMovies(mediaType, time) {
        // Returns and stores a list of trending movies
        // mediaType: The type of media to display (all, movie, tv, person)
        // time: Whether to display the trending list for the "day" or the "week"
        let trendingMovies = await search.getTrendingMovies(mediaType, time);
        
        this.setState({
            trendingMovies: trendingMovies.results
        });
        
        return trendingMovies;
    }
    
    getRandomMovieGenres(_movieGenres, num) {
        // Returns a list of random movie genres
        // num: The number of movie genres to return
        let movieGenres = [..._movieGenres];
        let randMovieGenres = [];
        
        for (let i = 0; i < num; i++) {
            if (!movieGenres.length) break;
            
            let randGenre = Math.floor(Math.random() * (movieGenres.length - 1));
            
            randMovieGenres.push(movieGenres[randGenre]);
            movieGenres.splice(randGenre, 1);
        }
        
        return randMovieGenres;
    }
    
	render() {
        // Retrieve all the different genres that will be displayed
        let genreMovies = this.state.genreMovies;
        let genreMovieCarousels = [];
        // The carousel number. Used to throttle requests for images
        let cNum = 1;
        
        for (const [key, value] of Object.entries(genreMovies)) {
            genreMovieCarousels.push(<MovieCarousel key={key} heading={key.split(",")[0]} carouselNum={cNum} movies={value} />);
            
            cNum++;
        }
        
		return (
			<>
                <MovieCarousel heading="Trending Daily" carouselNum={0} movies={this.state.trendingMovies} />
                {genreMovieCarousels}
                <Footer />
            </>
		  );
	}
};

export default Home;