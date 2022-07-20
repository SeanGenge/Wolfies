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
    }
    
	render() {
        const movieSlides = [];
        
        if (!this.props.movies) return;
        
        this.props.movies.forEach((movie, indx) => {
            movieSlides.push(<SwiperSlide key={indx} className=" d-flex justify-content-center"><MovieCard imgRequest={this.props.carouselNum * 550 + indx * 30} movieData={movie} /></SwiperSlide>);
        });
        
		return (
            <>
                <h2 className="carousel-heading mb-1">{this.props.heading}</h2>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                    breakpoints={{
                        280: {
                            slidesPerView: 3
                        },
                        540: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 4
                        },
                        1600: {
                            slidesPerView: 5
                        },
                        2100: {
                            slidesPerView: 7
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