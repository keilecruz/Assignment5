// Gallery is a page component that allows users to search for TV shows and displays the search results.

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import SearchForm from "../components/SearchForm.jsx";
import ShowList from "../components/ShowList.jsx";


function Gallery() {
    const [query, setQuery] = useState("Gilmore Girls");

    const [searchParams, setSearchParams] = useSearchParams();

    const [shows, setShows] = useState([]);

    const [searchTerm, setSearchTerm] = useState("Gilmore Girls");

    const [status, setStatus] = useState("loading");

    const [errorMessage, setErrorMessage] = useState("");


    const searchShows = useCallback(async (term) => {
        const trimmedTerm = term.trim();

        setSearchTerm(trimmedTerm);
        setShows([]);
        setErrorMessage("");

        if (!trimmedTerm) {
            setStatus("emptySearch");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch(
                `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(trimmedTerm)}`
            );

            if (response.status === 429) {
                throw new Error(
                    "Too many requests. Please wait before searching again."
                );
            }

            if (!response.ok) {
                throw new Error(
                    "Unable to retrieve shows. Please try again."
                );
            }

            const data = await response.json();

            const results = data
                .map((item) => item.show)
                .slice(0, 10);

            setShows(results);

            if (results.length === 0) {
                setStatus("noResults");
            } else {
                setStatus("success");
            }

        } catch (error) {
            setStatus("error");
            setErrorMessage(error.message);
        }

    }, []);


    useEffect(() => {
        const initialTerm =
            searchParams.get("q") || "Gilmore Girls";

        setQuery(initialTerm);
        searchShows(initialTerm);
    }, [searchShows, searchParams, setQuery]);


    function handleSearch(term) {
        setSearchParams({ q: term });
        searchShows(term);
    }


    return (
        <main className="gallery-page">

            <header className="page-header">

                <h1>TVmaze Show Gallery</h1>

                <p>
                    Search for your favorite television shows.
                </p>

            </header>


            <SearchForm
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
            />


            <section className="search-results">

                <h2>Search Results</h2>

                <p>
                    Search term:{" "}
                    <strong>
                        {searchTerm || "None"}
                    </strong>
                </p>

                <p>
                    Number of results:{" "}
                    <strong>{shows.length}</strong>
                </p>


                {status === "loading" && (
                    <p>Loading shows...</p>
                )}


                {status === "emptySearch" && (
                    <p>
                        Please enter a show title or keyword.
                    </p>
                )}


                {status === "error" && (
                    <p className="error-message">
                        {errorMessage}
                    </p>
                )}


                {status === "noResults" && (
                    <p>
                        No shows found. Try another search.
                    </p>
                )}


                {status === "success" && (
                    <ShowList shows={shows} />
                )}

            </section>


            <footer className="page-footer">

                <p>
                    Show information provided by{" "}

                    <a
                        href="https://www.tvmaze.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        TVmaze
                    </a>
                    .
                </p>

            </footer>

        </main>
    );
}

export default Gallery;