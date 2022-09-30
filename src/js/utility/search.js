import * as mav from "../variables/movie-api-vars";
import * as gv from "../variables/global-vars";

export async function getMovieGenres() {
    // Retrieves a list of movie genres
    return await fetch(`${gv.MOVIE_API_URL}/genre/movie/list?api_key=${process.env.MOVIE_API_KEY}`)
    .then(results => results.json())
    .then(data => {
        return data;
    });
}

export async function getTvGenres() {
    // Retrieves a list of movie genres
    return await fetch(`${gv.MOVIE_API_URL}/genre/tv/list?api_key=${process.env.MOVIE_API_KEY}`)
    .then(results => results.json())
    .then(data => {
        return data;
    });
}

export async function getTrendingMovies(mediaType, time) {
    // Retrieves a list of trending movies
    // mediaType: The type of media to display (all, movie, tv, person)
    // time: Whether to display the trending list for the "day" or the "week"
    
    // If mediaType or time is not correct, return an empty object
    if (!Object.values(mav.MEDIA_TYPE).includes(mediaType) || !Object.values(mav.TIME_WINDOW).includes(time)) return {results: []};
    
    // Fetch the trending movies and add them to a carousel
    return await fetch(`${gv.MOVIE_API_URL}/trending/${mediaType}/${time}?api_key=${process.env.MOVIE_API_KEY}`)
    .then( results => results.json())
    .then(data => {
        return data;
    });
}

export async function getMoviesByGenreIds(genreIds) {
    // Returns a list of movies by genre ids
    // genreIds: A list of genreIds
    
    let genreIdsStr = genreIds.join(",");
    
    return await fetch(`${gv.MOVIE_API_URL}/discover/movie?with_genres=${genreIdsStr}&api_key=${process.env.MOVIE_API_KEY}`)
    .then( results => results.json())
    .then(data => {
        return data;
    });
}

export async function searchMovies(movie, page) {
	// Returns a list of movies that match movie
	// movie: The movie you want to search
	// page: The page number you want to search
	
	return await fetch(`${gv.MOVIE_API_URL}/search/movie?query=${movie}&page=${page}&include_adult=false&language=en-US&api_key=${process.env.MOVIE_API_KEY}`)
		.then(results => results.json())
		.then(data => {
			return data;
		});
}