// CastList is a component that displays the cast information for a show. 
// It takes a prop called cast, which is an array of cast members. 
// If the cast information is not available, it displays a message indicating that. Otherwise, it renders a list of cast members, showing their names and the characters they play.  

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