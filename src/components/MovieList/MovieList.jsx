import MovieItem from './MovieItem/MovieItem';

import css from './MovieList.module.scss';

const MovieList = ({ movieTrend }) => {
  return (
    <ul className={css.list}>
      {movieTrend &&
        movieTrend.map(mov => <MovieItem key={mov.id} item={mov} />)}
    </ul>
  );
};

export default MovieList;
