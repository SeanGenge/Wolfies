import React from "react";
import moment from 'moment';
import { MOVIE_IMG_URL } from "../variables/global-vars";

class MovieCard_Modal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: {}
        };
    }
    
    componentDidMount() {
        document.addEventListener("movieCard__clicked", (e) => this.movieCard__clicked_callback(e));
    }
    
    movieCard__clicked_callback(e) {
        this.setState({
            movie: e.detail
        });
    }
    
    convertDate(date) {
        return moment(date).format('DD/MM/YYYY');
    }
    
	render() {
        let imgSrc = "";
        
        if (this.state.movie?.backdrop_path !== undefined && this.state.movie?.backdrop_path !== null) {
            imgSrc = MOVIE_IMG_URL + this.state.movie.backdrop_path;
        }
        
        return (
           <>
                <div id="movieInfo-modal" className="modal fade" tabIndex="-1">
                    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.state.movie.title}</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img className="movie-img" src={imgSrc} />
                                <div className="movie-info">
                                    <div className="modal__extra-info">
                                        <span className="me-1">{this.convertDate(this.state.movie.release_date)}</span>
                                        <span className="ms-1">{this.state.movie.media_type == "tv" ? "series" : "movie"}</span>
                                    </div>
                                    <p>{this.state.movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </> 
        );
	}
};

export default MovieCard_Modal;