import PropTypes from "prop-types";

function MovieDetail({coverImg, title, description_full, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>{title}</h2>
            <p>{description_full}</p>
            <p>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </p>
        </div>
    );
}

MovieDetail.propType = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description_full: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieDetail;

