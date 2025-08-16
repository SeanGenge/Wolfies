import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const query = searchParams.get("query");

		if (!query) {
			return NextResponse.json(
				{ error: "Missing query parameter" },
				{ status: 400 }
			);
		}

		const res = await fetch(
			`https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
				query
			)}&language=en-US&page=1`,
			{
				headers: {
					Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
					"Content-Type": "application/json",
				},
				cache: "no-store",
			}
		);

		if (!res.ok) {
			return NextResponse.json(
				{ error: "Unable to fetch search results" },
				{ status: res.status }
			);
		}

		const data = await res.json();
		return NextResponse.json(data);
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
