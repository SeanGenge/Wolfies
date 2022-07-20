import React from "react";
import * as mav from "../variables/movie-api-vars";
import { MOVIE_IMG_URL } from "../variables/global-vars";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.openMovieMobileMenu = this.openMovieMobileMenu.bind(this);
        this.loadImg = this.loadImg.bind(this);
        this.imgError = this.imgError.bind(this);
        
        this.imgRef = React.createRef();
    }
    
    imgError() {
        this.loadImg();
    }
    
    openMovieMobileMenu(e) {
        // Pass the data onto the mobile menu
        document.dispatchEvent(new CustomEvent("movieCard__clicked", { detail: this.props.movieData }));
    }
    
    loadImg() {
        let img = this.imgRef.current;
        
        // Adds a delay when loading images. Tries to prevent 429 error (Too many requests)
         setTimeout(() => {
             img.src = MOVIE_IMG_URL + this.props.movieData.poster_path;
         }, this.props.imgRequest);
    }
    
    componentDidMount() {
        this.loadImg();
    }
    
	render() {
        // return nothing if no data has been passed
        if (!this.props.movieData) return;
        
		return (
            <>
                <div className="card">
                    <img ref={this.imgRef} src="https://scarboroughdental.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" className="card-img-top" loading="lazy" onError={(ele) => {this.imgError(ele.target)}} onClick={this.openMovieMobileMenu} data-bs-toggle="offcanvas" data-bs-target="#mobile-movieInfo" />
                </div>
            </>
		  );
	}
};

export default MovieCard;