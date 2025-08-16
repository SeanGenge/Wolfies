"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Movie } from "@/types/movie";
import { Container, Grid, Typography } from "@mui/material";
import MovieCard from "@/components/MovieCard";

export default function SearchResults() {
	const [searchResults, setSearchResults] = useState<Movie[]>([]);
	const searchParams = useSearchParams();

	useEffect(() => {
		const query = searchParams.get("query") ?? "";
		if (!query) return;

		const getSearchResults = async () => {
			const searchResultsData = await fetch(
				`/api/search-multi?query=${encodeURIComponent(query)}`
			).then((res) => res.json());

			// group results
			const movies = searchResultsData.results.filter(
				(r: Movie) => r.media_type === "movie"
			);

			// only display movies for now
			setSearchResults(movies || []);
		};

		getSearchResults();
	}, [searchParams]);

	return (
		<Container maxWidth="xl">
			<Typography
				variant="h4"
				gutterBottom
				sx={{ marginTop: "2rem", marginBottom: "2rem" }}
			>
				Search Results for "{searchParams.get("query") ?? ""}"
			</Typography>

			<Grid container spacing={1}>
				{searchResults.map((result) => (
					<Grid key={result.id} item sx={{ marginBottom: "2rem" }}>
						<MovieCard movie={result} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
