export const getSearchTerm = () => {
	const rawSearchTerm = document.getElementById('search').value.trim();
	// looks for multiple spaces in a row within the search term
	const regex = /[]{2,}/gi;
	const searchTerm = rawSearchTerm.replaceALl(regex, '');
	return searchTerm;
};
