// Helpers.js contains utility functions for formatting and processing data related to TV shows.

export function stripHTML(html) {
    if (!html) {
        return "Not available";
    }

    return html
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}


export function formatDate(date) {
    if (!date) {
        return "Not available";
    }

    const formattedDate = new Date(date);

    if (Number.isNaN(formattedDate.getTime())) {
        return "Not available";
    }

    return formattedDate.toLocaleDateString();
}


export function formatDateTime(timestamp) {
    if (!timestamp) {
        return "Not available";
    }

    const formattedDate = new Date(timestamp * 1000);

    if (Number.isNaN(formattedDate.getTime())) {
        return "Not available";
    }

    return formattedDate.toLocaleString();
}


export function getRating(rating) {
    if (rating === null || rating === undefined) {
        return "Not available";
    }

    return rating;
}