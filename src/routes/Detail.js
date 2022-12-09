import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading</span>
                </div>
            ) : (
                <div className={styles.movie}>
                    <MovieDetail
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        description_full={movie.description_full}
                        genres={movie.genres}
                    />
                </div>    
            )}
        </div>
    )
}

export default Detail;