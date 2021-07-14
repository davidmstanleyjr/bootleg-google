import { setSearchFocus } from './searchBar';
import { getSearchTerm } from './dataFunctions';

document.addEventListener('readystatechange', (event) => {
	if (event.target.readyState === 'complete') {
		initApp();
	}
});

// starts the app
const initApp = () => {
	setSearchFocus();

	const form = document.getElementById('searchBar');
	form.addEventListener('submit', submitTheSearch);
};

//prevents form from refreshing the page
const submitTheSearch = (event) => {
	event.preventDefault();
	processTheSearch();
	setSearchFocus();
};

//async function for the wiki api
const processTheSearch = async () => {
	const searchTerm = getSearchTerm();
	if (searchTerm === '') return;
	const resultArray = await retrieveSearchResults(searchTerm);
};
