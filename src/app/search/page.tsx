import { Suspense } from "react";
import SearchResults from "./SearchResults";

export default function SearchPage() {
	return (
		<Suspense fallback={<div>Loading search results...</div>}>
			<SearchResults />
		</Suspense>
	);
}
