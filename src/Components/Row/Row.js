import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../Utils/axios";
// Removed external trailer package - using direct YouTube approach
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
        try {
            // console.log(fetchUrl)
            const request = await axios.get(fetchUrl);
            // console.log(request)
            setMovie(request.data.results);
        } catch (error) {
            console.log("error", error);
        }
        })();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // For now, we'll use a placeholder trailer ID
            // In a real application, you would implement a proper YouTube search
            // or use a movie database API that provides trailer information
            const movieTitle = movie?.title || movie?.name || movie?.original_name;
            console.log(`Looking for trailer for: ${movieTitle}`);
            
            // Placeholder - you can replace this with actual trailer logic
            // For demonstration, we'll use a popular movie trailer ID
            setTrailerUrl('dQw4w9WgXcQ'); // Rick Roll for demo purposes
        }
    };

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
        autoplay: 1,
        },
    };

    return (
        <div className="row">
        <h1>{title}</h1>
        <div className="row__posters">
            {movies?.map((movie, index) => (
            <img
                onClick={() => handleClick(movie)}
                key={index}
                src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            />
            ))}
        </div>
        <div style={{ padding: "40px" }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        </div>
    );
};

export default Row;
