import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import MovieCard from "../Components/MovieCard.jsx";

// A movie carousel that displays a list of movies
class MovieCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    
	render() {
        const movieSlides = [];
        
        this.props.movies.forEach((movie, id) => {
            movieSlides.push(<SwiperSlide key={movie.id} className=" d-flex justify-content-center"><MovieCard type={movie.media_type} data={movie} /></SwiperSlide>);
        });
        
		return (
            <>
                <h1 className="text-center">{this.props.heading}</h1>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
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