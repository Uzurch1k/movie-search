import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '../../API/FetchMovies';

import CastItem from './CastItem/CastItem';
import { LoaderDetails } from '../Loader/Loader';

import { TbFaceIdError } from 'react-icons/tb';
import css from './MovieCast.module.scss';

const MovieCast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loaderDetails, setLoaderDetails] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setLoaderDetails(true);
        setNotFound(false);
        const res = await fetchMoviesCredits(id);
        const dataResults = res.data;
        if (!(dataResults.cast.length > 0)) return setNotFound(true);
        setMovieCast(dataResults);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      } finally {
        setLoaderDetails(false);
      }
    }
    fetchResponse();
  }, [id]);

  const { cast } = movieCast;

  return (
    <div className={css.cast}>
      {loaderDetails && <LoaderDetails />}
      {cast?.length > 0 && (
        <ul className={css.cast__list}>
          {cast.map(item => (
            <CastItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {notFound && (
        <div className={css.found}>
          <TbFaceIdError />
        </div>
      )}
    </div>
  );
};

export default MovieCast;
