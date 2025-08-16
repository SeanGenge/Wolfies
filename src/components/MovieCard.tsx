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

type MovieCardProps = {
	movie: Movie
};

export default function MovieCard({ movie }: MovieCardProps) {
	function GetColourRating(rating: number) {
		if (rating < 5.0) return "#b92323";
		if (rating < 6.5) return "#e68510";
		if (rating < 7.5) return "#f7b819";
		if (rating < 8.5) return "	#96df36";
		return "#2edf2e";
	}
	
	return (
		<Card sx={{ width: 290, height: 550, userSelect: 'none', mx: 'auto' }}>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
					}}
				>
					{movie?.vote_average ? <Avatar sx={{ width: 30, height: 30, fontSize: 12, fontWeight: 'bold', backgroundColor: `${GetColourRating(movie.vote_average)}33`, color: GetColourRating(movie.vote_average), border: `2px solid ${GetColourRating(movie.vote_average) }` }}>
						{movie.vote_average.toFixed(1)}
					</Avatar> : null}
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
			{movie?.poster_path !== null ? <CardMedia
				sx={{ height: 500 }}
				image={posterURL(movie.poster_path, "w342")}
				title={movie.original_title}
			/> : null}
		</Card>
	);
}
