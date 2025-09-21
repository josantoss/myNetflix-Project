// TMDB API Key - Working key for deployment
// For production, get your own at https://www.themoviedb.org/settings/api
const API_KEY = process.env.REACT_APP_API_KEY || "3fd2be6f0c70a2a598f084ddfb75487c";

// Log API key status
if (!process.env.REACT_APP_API_KEY) {
    console.log("🎬 Using fallback TMDB API key for deployment");
} else {
    console.log("🔑 Using custom TMDB API key");
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
