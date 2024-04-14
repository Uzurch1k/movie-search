import { Link, useLocation } from 'react-router-dom';

import css from './MovieItem.module.scss';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

const MovieItem = ({ item }) => {
  const { title, id, poster_path } = item;
  const location = useLocation();

  return (
    <li className={css.item}>
      <Link to={`/movies/${id}`} className={css['img-link']} state={location}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </Link>
      <Link to={`/movies/${id}`} className={css.link} state={location}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;
