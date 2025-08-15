const TMDB_IMG_BASE = "https://image.tmdb.org/t/p/";

export function posterURL(
	path: string | null | undefined,
	size: "w185" | "w342" | "w500" | "w780" | "original" = "w342"
) {
	return path ? `${TMDB_IMG_BASE}${size}${path}` : "/poster-placeholder.svg";
}