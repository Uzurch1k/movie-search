import MovieItem from './MovieItem/MovieItem';

import css from './MovieList.module.scss';

const MovieList = ({ movieTrend, movieSearch }) => {
  return (
    <ul className={css.list}>
      {movieTrend &&
        movieTrend.map(mov => <MovieItem key={mov.id} item={mov} />)}
      {movieSearch &&
        movieSearch.map(mov => <MovieItem key={mov.id} item={mov} />)}
    </ul>
  );
};

export default MovieList;
