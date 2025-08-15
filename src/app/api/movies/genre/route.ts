import { NextResponse } from "next/server";

export async function GET() {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
			{
				headers: {
					Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
					"Content-Type": "application/json",
				},
				cache: "no-store",
			}
		);
		
		if (!res.ok) {
			return NextResponse.json({ error: "Unable to fetch movie genres" }, { status: res.status });
		}

		const data = await res.json();
		
		return NextResponse.json(data);
	} catch (err) {
		console.error(err);
		
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}