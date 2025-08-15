export type Movie = {
	id: number;
	original_title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
	vote_count: number;
	adult: boolean;
	backdrop_path: string;
	original_language: string;
	video: boolean;
	popularity: number;
	genre_ids: number[];
};