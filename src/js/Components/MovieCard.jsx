import React from "react";
import { Offcanvas, Modal } from "bootstrap";
import { MOVIE_IMG_URL } from "../variables/global-vars";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.openMovieMobileInfo = this.openMovieMobileInfo.bind(this);
        this.loadImg = this.loadImg.bind(this);
        
        this.imgRef = React.createRef();
    }
    
    openMovieMobileInfo() {
        // Displays the offCanvas if the slider has not changed
        let isMobile = screen.width <= 540;
        
        if (!this.props.slideChanged) {
            document.dispatchEvent(new CustomEvent("movieCard__clicked", { detail: this.props.movieData }));
            
            if (isMobile) {
                let offcanvas = new Offcanvas(document.getElementById("mobile-movieInfo"));
                offcanvas.show();
            }
            else {
                let modal = new Modal(document.getElementById("movieInfo-modal"));
                modal.show();
            }
        }
        
    }
    
    loadImg() {
        let img = this.imgRef.current;
        
        // Adds a delay when loading images. Tries to prevent 429 error (Too many requests)
         setTimeout(() => {
            if (this.props.movieData.poster_path != undefined) {
                img.src = MOVIE_IMG_URL + this.props.movieData.poster_path;
            }
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
                <div className="card" onClick={this.openMovieMobileInfo}>
                    <img ref={this.imgRef} src="https://scarboroughdental.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" className="card-img" loading="lazy" onError={this.loadImg} />
                </div>
            </>
		  );
	}
};

export default MovieCard;