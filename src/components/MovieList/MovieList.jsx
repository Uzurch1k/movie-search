import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from '../../API/FetchMovies';
import MovieItem from './MovieItem/MovieItem';

import css from './MovieList.module.scss';

const MovieList = () => {
  const [movieTrend, setMovieTrend] = useState([]);

  useEffect(() => {
    async function fetchResponse() {
      try {
        const res = await fetchMoviesTrending();
        setMovieTrend(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    }
    fetchResponse();
  }, []);

  return (
    <ul className={css.list}>
      {movieTrend.map(mov => (
        <MovieItem key={mov.id} item={mov} />
      ))}
    </ul>
  );
};

export default MovieList;
