// TMDB API Key - MUST be set as environment variable
// Get your API key from: https://www.themoviedb.org/settings/api
const API_KEY = process.env.REACT_APP_API_KEY;

// Validate API key exists
if (!API_KEY) {
    console.error("❌ REACT_APP_API_KEY environment variable is required!");
    console.error("📋 Steps to fix:");
    console.error("1. Get API key from https://www.themoviedb.org/settings/api");
    console.error("2. Add REACT_APP_API_KEY to your Vercel environment variables");
    console.error("3. Redeploy your application");
} else {
    console.log("✅ TMDB API key loaded from environment variables");
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
