import { useState, useEffect, useRef } from 'react';
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

  const castRef = useRef(null);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setLoaderDetails(true);
        setNotFound(false);
        const res = await fetchMoviesCredits(id);
        const dataResults = res.data;

        setTimeout(() => {
          const height =
            castRef.current.firstElementChild.getBoundingClientRect().top;
          window.scrollBy({
            top: height - 100,
            behavior: 'smooth',
          });
        }, 100);

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
    <div className={css.cast} ref={castRef}>
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
