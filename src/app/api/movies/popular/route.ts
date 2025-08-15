import { NextResponse } from "next/server";

export async function GET() {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
			{
				headers: {
					Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
					"Content-Type": "application/json",
				},
				cache: "no-store",
			}
		);
		
		if (!res.ok) {
			return NextResponse.json({ error: "unable to fetch popular movies" }, { status: res.status });
		}

		const data = await res.json();
		
		return NextResponse.json(data);
	} catch (err) {
		console.error(err);
		
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
