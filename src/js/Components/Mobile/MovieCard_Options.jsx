import React from "react";

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
    
	render() {
		return (
            <>
                <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" tabIndex="-1" id="mobile-movieInfo" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">{this.state.movie?.title ?? ''}</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body small">
                        
                    </div>
                </div>
            </>
		  );
	}
};

export default MovieCard_Options;