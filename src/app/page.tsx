"use client";

import { useEffect, useState } from 'react';
import { Container } from "@mui/material";
import { Movie } from "../types/movie";
import MovieCarousel from "@/components/MovieCarousel";

export default function Home() {
	const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
	const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
	
	async function fetchPopularMovies() {
		const popularMoviesData = await fetch("/api/movies/popular").then(res => res.json());
		const upcomingMoviesData = await fetch("/api/movies/upcoming").then(res => res.json());
		
		setPopularMovies(popularMoviesData.results || []);
		setUpcomingMovies(upcomingMoviesData.results || []);
	}
  
	useEffect(() => {
		fetchPopularMovies();
	}, []);
	
	return (
		<>
			<Container maxWidth="xl">
				<MovieCarousel title="Popular Now" movies={popularMovies} />
				<MovieCarousel title="Upcoming" movies={upcomingMovies} />
			</Container>
		</>
	);
}
