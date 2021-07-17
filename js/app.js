import {
	setSearchFocus,
	showClearTextButton,
	clearSearchText,
} from "./searchBar";
import {
	deleteSearchResults,
	buildSearchResults,
	clearStatsLine,
	setStatsLine,
} from "./searchResults";
import { getSearchTerm } from "./dataFunctions";

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initApp();
	}
});

// starts the app
const initApp = () => {
	setSearchFocus();
	const search = document.getElementById("search");
	search.addEventListener("input", showClearTextButton);
	const clear = document.getElementById("clear");
	clear.addEventListener("click", clearSearchText);
	const form = document.getElementById("searchBar");
	form.addEventListener("submit", submitTheSearch);
};

//prevents form from refreshing the page
const submitTheSearch = (event) => {
	event.preventDefault();
	deleteSearchResults();
	processTheSearch();
	setSearchFocus();
};

//async function for the wiki api
const processTheSearch = async () => {
	clearStatsLine();
	const searchTerm = getSearchTerm();
	if (searchTerm === "") return;
	const resultArray = await retrieveSearchResults(searchTerm);
	if (resultArray.length) buildSearchResults(resultArray);
	setStatsLine(resultArray.length);
};
