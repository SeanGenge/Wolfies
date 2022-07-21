import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../Components/MovieCard.jsx";
import MovieCard_Options from "./Mobile/MovieCard_options.jsx";

// A movie carousel that displays a list of movies
class MovieCarousel extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           slideChanged: false 
        };
        
        this.sliderChange = this.sliderChange.bind(this);
    }
    
    sliderChange() {
        this.setState({
            slideChanged: true
        });
        
        setTimeout(() => {
            this.setState({
                slideChanged: false
            })
        }, 100);
    }
    
	render() {
        const movieSlides = [];
        
        if (!this.props.movies) return;
        
        this.props.movies.forEach((movie, indx) => {
            movieSlides.push(<SwiperSlide key={indx}><MovieCard imgRequest={this.props.carouselNum * 550 + indx * 30} slideChanged={this.props.slideChanged} movieData={movie} /></SwiperSlide>);
        });
        
		return (
            <>
                <h2 className="carousel-heading mb-1">{this.props.heading}</h2>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => this.sliderChange}
                    breakpoints={{
                        280: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        540: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        1280: {
                            slidesPerView: 4,
                            slidesPerGroup: 4
                        },
                        1600: {
                            slidesPerView: 5,
                            slidesPerGroup: 5
                        },
                        2100: {
                            slidesPerView: 7,
                            slidesPerGroup: 7
                        }
                    }}>
                        {movieSlides}
                </Swiper>
                <MovieCard_Options />
            </>
		  );
	}
};

export default MovieCarousel;