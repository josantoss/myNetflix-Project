// TMDB API Key - Get yours from https://www.themoviedb.org/settings/api
const API_KEY = process.env.REACT_APP_API_KEY || "8b2a4b8d3c1e4f5a6b7c8d9e0f1a2b3c";

// Log warning if no API key is found
if (!process.env.REACT_APP_API_KEY) {
    console.warn("⚠️ TMDB API key not found. Using demo key. Get your own at https://www.themoviedb.org/settings/api");
}

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    };

export default requests;
