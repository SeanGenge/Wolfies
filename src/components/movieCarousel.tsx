import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Movie } from '../types/movie';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import { posterURL } from '@/lib/images';
import CircularProgress from '@mui/material/CircularProgress';

type MovieCarouselProps = {
	title: string,
	movies: Movie[],
}

export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
	function GetColourRating(rating: number) {
		if (rating < 5.0) return "#b92323";
		if (rating < 6.5) return "#e68510";
		if (rating < 7.5) return "#f7b819";
		if (rating < 8.5) return "	#96df36";
		return "#2edf2e";
	}
	
	return (
		<>
			<Typography textAlign="center" sx={{marginBottom: '1rem', marginTop: '2rem'}} variant="h2" className="movie-carousel__title">{title}</Typography>
			{
				movies.length === 0 ?
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<CircularProgress />
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
							movies.map((movie) => {
								const ratingColour: string = GetColourRating(movie.vote_average);
								
								return <SwiperSlide key={movie.id}>
									<Card sx={{ width: 290, height: 550, userSelect: 'none', mx: 'auto' }}>
										<CardContent>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													gap: 1,
												}}
											>
												<Avatar sx={{ width: 30, height: 30, fontSize: 12, fontWeight: 'bold', backgroundColor: `${ratingColour}33`, color: ratingColour, border: `2px solid ${ratingColour}` }}>
													{movie.vote_average.toFixed(1)}
												</Avatar>
												<Typography textAlign="center" gutterBottom variant="body2" component="div" sx={{
													flex: 1,
													overflow: "hidden",
													whiteSpace: "nowrap",
													textOverflow: "ellipsis",
												}}
												>
													{movie.original_title}
												</Typography>
												<Checkbox
													draggable={false}
													icon={<FavoriteBorder />}
													sx={{ "&.Mui-checked": { color: "error.main" } }}
													checkedIcon={<Favorite />}
												/>
											</Box>
										</CardContent>
										<CardMedia
											sx={{ height: 500 }}
											image={posterURL(movie.poster_path, "w342")}
											title={movie.original_title}
										/>
									</Card>
								</SwiperSlide>
							})
						}
					</Swiper>
				</div>
			}
		</>
	);
}
