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