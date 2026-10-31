function CastList({ cast }) {
    if (!cast || cast.length === 0) {
        return <p>Cast information not available.</p>;
    }

    return (
        <ul className="cast-list">
            {cast.map((member) => (
                <li key={member.person.id}>
                    <strong>
                        {member.person.name}
                    </strong>

                    {" as "}

                    {member.character.name || "Not available"}
                </li>
            ))}
        </ul>
    );
}

export default CastList;