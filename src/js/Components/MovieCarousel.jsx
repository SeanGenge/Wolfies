import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../Components/MovieCard.jsx";
import MovieCard_Offcanvas from "./Mobile/MovieCard_Offcanvas.jsx";
import MovieCard_Modal from "./MovieCard_Modal.jsx";

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
            movieSlides.push(<SwiperSlide key={indx}><MovieCard imgRequest={this.props.carouselNum * 550 + indx * 50} slideChanged={this.props.slideChanged} movieData={movie} /></SwiperSlide>);
        });
        
		return (
            <>
                <div className="swiper-container">
                    <h2 className="carousel-heading">{this.props.heading}</h2>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        onSlideChange={() => this.sliderChange}
                        breakpoints={{
                            280: { // Mobile
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            281: { // Mobile 2
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            },
                            540: { // Mobile 3
                                slidesPerView: 4,
                                slidesPerGroup: 4
                            },
                            768: { // Tablets
                                slidesPerView: 4,
                                slidesPerGroup: 4
                            },
                            1200: { // Laptop
                                slidesPerView: 5,
                                slidesPerGroup: 5
                            },
                            1600: { // Desktop
                                slidesPerView: 5,
                                slidesPerGroup: 5
                            }
                        }}>
                            {movieSlides}
                    </Swiper>
                </div>
                <MovieCard_Offcanvas />
                <MovieCard_Modal />
            </>
		  );
	}
};

export default MovieCarousel;