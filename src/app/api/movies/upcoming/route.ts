import { NextResponse } from "next/server";

function getUpcomingDates(daysAhead = 90) {
	const today = new Date();
	const maxDate = new Date();
	maxDate.setDate(today.getDate() + daysAhead);

	// Format YYYY-MM-DD
	const format = (date: Date) => date.toISOString().split("T")[0];

	return {
		min_date: format(today),
		max_date: format(maxDate)
	};
}

export async function GET() {
	try {
		const { min_date, max_date } = getUpcomingDates();

		const res = await fetch(
			`https://api.themoviedb.org/3/discover/movie?` +
			`include_adult=false&include_video=false&language=en-US&page=1` +
			`&sort_by=popularity.desc&with_release_type=3&watch_region=AU` +
			`&release_date.gte=${min_date}&release_date.lte=${max_date}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
					"Content-Type": "application/json",
				},
				cache: "no-store",
			}
		);

		if (!res.ok) {
			return NextResponse.json({ error: "Unable to fetch upcoming movies" }, { status: res.status });
		}

		const data = await res.json();
		return NextResponse.json(data);
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
