import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM5MmZhNmRlNDZhNTY3MjdlNzA3MThmYmViNzNhZSIsInN1YiI6IjY2MWFiMmU0OTgyZjc0MDE4NjQ3MTE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NlofdTM0gF_GC_c0JiMxSL9RATLvq2lNqAEWudbtOVE';

const BASE_URL = 'https://api.themoviedb.org/';

const options = {
  headers: {
    Authorization: 'Bearer ' + API_TOKEN,
  },
};

export const fetchMoviesTrending = async () => {
  const url = BASE_URL + '3/trending/movie/day';
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesSearch = async query => {
  const url =
    BASE_URL +
    `3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesDetails = async movieId => {
  const url = BASE_URL + `3/movie/${movieId}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesCredits = async movieId => {
  const url = BASE_URL + `3/movie/${movieId}/credits`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesReviews = async movieId => {
  const url = BASE_URL + `3/movie/${movieId}/reviews`;
  const response = await axios.get(url, options);
  return response;
};
