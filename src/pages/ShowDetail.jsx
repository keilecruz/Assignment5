import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

import CastList from "../components/CastList.jsx";

import {
    stripHTML,
    formatDate,
    formatDateTime,
    getRating
} from "../utils/helpers.js";


function ShowDetail() {
    const { id } = useParams();

    const [show, setShow] = useState(null);

    const [cast, setCast] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {
        const controller = new AbortController();

        async function fetchShowDetails() {
            setLoading(true);
            setError("");
            setShow(null);
            setCast([]);

            try {
                const showResponse = await fetch(
                    `https://api.tvmaze.com/shows/${id}`,
                    { signal: controller.signal }
                );

                if (showResponse.status === 404) {
                    throw new Error("This TV show could not be found.");
                }

                if (showResponse.status === 429) {
                    throw new Error(
                        "Too many requests. Please wait and try again."
                    );
                }

                if (!showResponse.ok) {
                    throw new Error(
                        "Unable to load this TV show."
                    );
                }

                const showData = await showResponse.json();

                setShow(showData);


                const castResponse = await fetch(
                    `https://api.tvmaze.com/shows/${id}/cast`,
                    { signal: controller.signal }
                );

                if (!castResponse.ok) {
                    throw new Error(
                        "Unable to load the show's cast."
                    );
                }

                const castData = await castResponse.json();

                setCast(castData.slice(0, 15));

            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchShowDetails();

        return () => {
            controller.abort();
        };

    }, [id]);


    if (loading) {
        return (
            <main className="detail-page">
                <p>Loading show details...</p>
            </main>
        );
    }


    if (error) {
        return (
            <main className="detail-page">

                <p className="error-message">
                    {error}
                </p>

                <Link to="/">
                    Return to Gallery
                </Link>

            </main>
        );
    }


    if (!show) {
        return (
            <main className="detail-page">

                <p>Show information not available.</p>

                <Link to="/">
                    Return to Gallery
                </Link>

            </main>
        );
    }


    const channel =
        show.network?.name ||
        show.webChannel?.name ||
        "Not available";


    return (
        <main className="detail-page">

            <Link to="/" className="back-link">
                ← Back to Gallery
            </Link>


            <article className="detail-content">

                {show.image && show.image.original && (
                    <img
                        className="detail-poster"
                        src={show.image.original}
                        alt={`${show.name} poster`}
                    />
                )}


                <div className="detail-information">

                    <h1>
                        {show.name || "Not available"}
                    </h1>


                    <p>
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


                    <p>
                        <strong>Status:</strong>{" "}

                        {show.status || "Not available"}
                    </p>


                    <p>
                        <strong>Network or Streaming Channel:</strong>{" "}

                        {channel}
                    </p>


                    <h2>Full Cast</h2>

                    <CastList cast={cast} />


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

        </main>
    );
}

export default ShowDetail;