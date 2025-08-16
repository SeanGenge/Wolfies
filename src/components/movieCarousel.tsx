import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Movie } from '../types/movie';
import { Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import MovieCard from './MovieCard';

type MovieCarouselProps = {
	title: string,
	movies: Movie[],
}

export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
	return (
		<>
			<Typography textAlign="center" sx={{marginBottom: '1rem', marginTop: '2rem'}} variant="h2" className="movie-carousel__title">{title}</Typography>
			{
				movies.length === 0 ?
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<CircularProgress color="tertiary" />
					</Box>
				:
				<div className="movie-carousel">
					<Swiper
						modules={[Navigation ]}
						spaceBetween={15}
						navigation
						breakpoints={{
							0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 12 },
							550: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 12 },
							850: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 12 },
							1200: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 14 },
							1600: { slidesPerView: 5, slidesPerGroup: 1, spaceBetween: 16 },
						}}
					>
						{
							movies.map((movie) => (
								<SwiperSlide key={movie.id}>
									<MovieCard movie={movie} />
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			}
		</>
	);
}
