import MovieItem from './MovieItem/MovieItem';

import css from './MovieList.module.scss';

const MovieList = ({ movieResults }) => {
  return (
    <ul className={css.list}>
      {movieResults &&
        movieResults.map(mov => <MovieItem key={mov.id} item={mov} />)}
    </ul>
  );
};

export default MovieList;
