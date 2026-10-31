// ShowList is a component that displays a list of TV shows.

import ShowCard from "./ShowCard";

function ShowList({ shows }) {
  if (!shows || shows.length === 0) {
    return <p>No shows found.</p>;
  }

  return (
    <div className="show-list">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default ShowList;