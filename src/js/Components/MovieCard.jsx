import React from "react";
import * as mav from "../variables/movie-api-vars";
import { MOVIE_IMG_URL } from "../variables/global-vars";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
	render() {
        let title = this.props.type === mav.MEDIA_TYPE.movie ? this.props.data.title : this.props.data.name;
        
		return (
            <div className="card" style={{width: "18rem"}}>
                <img src={MOVIE_IMG_URL + this.props.data.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>
            </div>
		  );
	}
};

export default MovieCard;