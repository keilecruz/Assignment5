import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CastList from "./CastList.jsx";

import {
    stripHTML,
    formatDate,
    formatDateTime,
    getRating
} from "../utils/helpers.js";


function ShowCard({ show }) {
    const [cast, setCast] = useState([]);
    const [castLoading, setCastLoading] = useState(true);
    const [castError, setCastError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchCast() {
            setCastLoading(true);
            setCastError(false);

            try {
                const response = await fetch(
                    `https://api.tvmaze.com/shows/${show.id}/cast`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Unable to load cast");
                }

                const data = await response.json();

                setCast(data.slice(0, 3));
            } catch (error) {
                if (error.name !== "AbortError") {
                    setCastError(true);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setCastLoading(false);
                }
            }
        }

        fetchCast();

        return () => {
            controller.abort();
        };
    }, [show.id]);


    return (
        <article className="show-card">

            {show.image && show.image.medium && (
                <img
                    className="show-poster"
                    src={show.image.medium}
                    alt={`${show.name} poster`}
                />
            )}

            <div className="show-card-content">

                <h2>
                    <Link to={`/shows/${show.id}`}>
                        {show.name || "Not available"}
                    </Link>
                </h2>

                <p className="show-summary">
                    {stripHTML(show.summary)}
                </p>

                <p>
                    <strong>Premiered:</strong>{" "}
                    {formatDate(show.premiered)}
                </p>

                <p>
                    <strong>Last Updated:</strong>{" "}
                    {formatDateTime(show.updated)}
                </p>

                <p>
                    <strong>Genres:</strong>{" "}
                    {show.genres && show.genres.length > 0
                        ? show.genres.join(", ")
                        : "Not available"}
                </p>

                <p>
                    <strong>Rating:</strong>{" "}
                    {getRating(show.rating?.average)}
                </p>

                <div className="card-cast">

                    <strong>Main Cast:</strong>

                    {castLoading && (
                        <p>Loading cast...</p>
                    )}

                    {castError && (
                        <p>Cast information unavailable.</p>
                    )}

                    {!castLoading && !castError && (
                        <CastList cast={cast} />
                    )}

                </div>

                <p>
                    <a
                        href={show.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on TVmaze
                    </a>
                </p>

            </div>
        </article>
    );
}

export default ShowCard; 