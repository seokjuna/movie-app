import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({coverImg, title, year, description_full, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>{title}</h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <hr />
                <p>{description_full}</p>
                
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
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

