import { Link } from 'react-router-dom';
import css from './MovieItem.module.scss';

const MovieItem = ({ item }) => {
  const { title, id, poster_path } = item;
  return (
    <li className={css.item}>
      <Link to={`/movies/${id}`} className={css['img-link']}>
        {poster_path && (
          <img
            src={'https://image.tmdb.org/t/p/w500/' + poster_path}
            alt={title}
          />
        )}
      </Link>
      <Link to={`/movies/${id}`} className={css.link}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;
