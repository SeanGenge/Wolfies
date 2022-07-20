import React from "react";
import moment from 'moment';
import { MOVIE_IMG_URL } from "../../variables/global-vars";

class MovieCard_Options extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: {}
        };
        this.movieCard__clicked_callback = this.movieCard__clicked_callback.bind(this);
        
    }
    
    componentDidMount() {
        document.addEventListener("movieCard__clicked", (e) => this.movieCard__clicked_callback(e));
    }
    
    movieCard__clicked_callback(e) {
        this.setState({
            movie: e.detail
        });
    }
    
    componentWillUnmount() {
        document.removeEventListener("movieCard__clicked");
    }
    
    convertDate(date) {
        return moment(date).format('DD/MM/YYYY');
    }
    
	render() {
		return (
            <>
                <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" tabIndex="-1" id="mobile-movieInfo" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header pb-2">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">{this.state.movie?.title ?? ''}</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas__extra-info ps-3 pb-2">
                        <span className="me-1">{this.convertDate(this.state.movie.release_date)}</span>
                        <span className="ms-1">{this.state.movie.media_type == "tv" ? "series" : "movie"}</span>
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-flex flex-column">
                            <img className="" src={MOVIE_IMG_URL + this.state.movie.backdrop_path} />
                            <p className="mt-4">
                                {this.state.movie.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </>
		  );
	}
};

export default MovieCard_Options;