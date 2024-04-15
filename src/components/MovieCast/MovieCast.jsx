import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '../../API/FetchMovies';

import CastItem from './CastItem/CastItem';

import { TbFaceIdError } from 'react-icons/tb';
import css from './MovieCast.module.scss';

const MovieCast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setNotFound(false);
        const res = await fetchMoviesCredits(id);
        setMovieCast(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setNotFound(true);
      }
    }
    fetchResponse();
  }, [id]);

  const { cast } = movieCast;

  return (
    <div className={css.cast}>
      {cast?.length > 0 ? (
        <ul className={css.cast__list}>
          {cast.map(item => (
            <CastItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className={css.found}>{notFound && <TbFaceIdError />}</div>
      )}
    </div>
  );
};

export default MovieCast;
