import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from '../../API/FetchMovies';

import MovieList from '../../components/MovieList/MovieList';

import css from './HomePage.module.scss';

const HomePage = () => {
  const [movieTrend, setMovieTrend] = useState([]);

  useEffect(() => {
    async function fetchResponse() {
      try {
        const res = await fetchMoviesTrending();
        setMovieTrend(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResponse();
  }, []);

  return (
    <section className={css.home}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList movieResults={movieTrend} />
    </section>
  );
};

export default HomePage;
