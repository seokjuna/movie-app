import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieDetail({coverImg, title, year, rating, description_full, genres, url}) {
    return (
        <div>
            <div className={styles.movie}>
                    <img src={coverImg} alt={title} className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>{title}</h2>
                    <h3 className={styles.movie__year}>{year}</h3>
                    <ul className={styles.movie__genres}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    <p className={styles.movie__rating}>
                        <FontAwesomeIcon icon={faStar} className={styles.ratingStar} />{rating}
                    </p>
                    <hr />
                    <p>{description_full}</p>
                </div>
            </div>
            <a href={url} className={styles.btnGoSite}>Go To Site</a>
        </div>
    );
}

MovieDetail.propType = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description_full: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}

export default MovieDetail;

