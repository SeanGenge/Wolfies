import React from "react";
import * as mav from "../variables/movie-api-vars";
import { MOVIE_IMG_URL } from "../variables/global-vars";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    imgReload(img) {
        // Prevent looping
        img.onError = null;
        
        // Add a bit of a delay to prevent too many requests to the server
        setTimeout(() => {
            img.src = img.src;
        }, 1000);
    }
    
	render() {
        // return nothing if no data has been passed
        if (!this.props.data) return;
        
        let title = !this.props.data.media_type === mav.MEDIA_TYPE.movie ? this.props.data.name : this.props.data.title;
        let imgUrl = this.props.data.poster_path ? MOVIE_IMG_URL + this.props.data.poster_path : "";
        
		return (
            <div className="card" style={{width: "18rem"}}>
                <img src={imgUrl} className="card-img-top" loading="lazy" onError={(ele) => {this.imgReload(ele.target)}} />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>
            </div>
		  );
	}
};

export default MovieCard;