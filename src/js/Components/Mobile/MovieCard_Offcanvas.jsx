import React from "react";
import moment from 'moment';
import { Offcanvas } from "bootstrap";
import { MOVIE_IMG_URL } from "../../variables/global-vars";

class MovieCard_Offcanvas extends React.Component {
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
    
    hideInfo(e) {
        let offcanvas = new Offcanvas(e.target);
        
        offcanvas.hide();
    }
    
	render() {
        let imgSrc = "";
        
        if (this.state.movie?.backdrop_path !== undefined && this.state.movie?.backdrop_path !== null) {
            imgSrc = MOVIE_IMG_URL + this.state.movie.backdrop_path;
        }
        
		return (
            <>
                <div className="offcanvas-lg offcanvas-bottom" tabIndex="-1" id="mobile-movieInfo" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header pb-2">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">{this.state.movie?.title ?? ''}</h5>
                        <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={this.hideInfo}></button>
                    </div>
                    <div className="offcanvas__extra-info ps-3 pb-2">
                        <span className="me-1">{this.convertDate(this.state.movie.release_date)}</span>
                        <span className="ms-1">{this.state.movie.media_type == "tv" ? "series" : "movie"}</span>
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-flex flex-column">
                            <img className="offcanvas-img" src={imgSrc} />
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

export default MovieCard_Offcanvas;