// SearchForm is a component that renders a search form for TV shows.
// It takes three props: query, setQuery, and onSearch. The query prop represents the current search term, setQuery is a function to update the search term, and onSearch is a function to handle the search action when the form is submitted. The component includes an input field for entering the search term and a submit button to trigger the search.    

function SearchForm({ query, setQuery, onSearch }) {
    function handleSubmit(event) {
        event.preventDefault();

        onSearch(query);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for a TV show..."
                aria-label="Search for a TV show"
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchForm;