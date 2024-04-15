import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '../../API/FetchMovies';

import CastItem from './CastItem/CastItem';

import css from './MovieCast.module.scss';

const MovieCast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        const res = await fetchMoviesCredits(id);
        setMovieCast(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResponse();
  }, [id]);

  const { cast } = movieCast;

  return (
    <div className={css.cast}>
      <ul className={css.cast__list}>
        {cast?.length > 0 &&
          cast.map(item => <CastItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default MovieCast;
