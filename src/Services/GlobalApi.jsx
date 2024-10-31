import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key='2e5a8bead1f493c1b8ae46b2aae6ec53';

const movieByGenreBaseUrl='https://api.themoviedb.org/3/discover/movie?api_key=2e5a8bead1f493c1b8ae46b2aae6ec53'

//https://api.themoviedb.org/3/trending/all/day?api_key=2e5a8bead1f493c1b8ae46b2aae6ec53

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseUrl+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}