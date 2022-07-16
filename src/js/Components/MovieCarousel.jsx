import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../Components/MovieCard.jsx";

// A movie carousel that displays a list of movies
class MovieCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    
	render() {
        const movieSlides = [];
        
        if (!this.props.movies) return;
        
        this.props.movies.forEach((movie, id) => {
            movieSlides.push(<SwiperSlide key={id} className=" d-flex justify-content-center"><MovieCard data={movie} /></SwiperSlide>);
        });
        
		return (
            <>
                <h1 className="text-center test">{this.props.heading}</h1>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                    breakpoints={{
                        280: {
                            slidesPerView: 1
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
            </>
		  );
	}
};

export default MovieCarousel;