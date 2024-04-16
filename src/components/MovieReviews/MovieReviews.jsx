import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../API/FetchMovies';

import ReviewsItem from './ReviewsItem/ReviewsItem';
import { LoaderDetails } from '../Loader/Loader';

import { TbFaceIdError } from 'react-icons/tb';
import css from './MovieReviews.module.scss';

const MovieReviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loaderDetails, setLoaderDetails] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setLoaderDetails(true);
        setNotFound(false);
        const res = await fetchMoviesReviews(id);
        const dataResults = res.data;
        if (!(dataResults.results.length > 0)) return setNotFound(true);
        setMovieReviews(dataResults);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      } finally {
        setLoaderDetails(false);
      }
    }
    fetchResponse();
  }, [id]);

  const { results } = movieReviews;

  return (
    <div className={css.reviews}>
      {loaderDetails && <LoaderDetails />}
      {results?.length > 0 && (
        <ul className={css.reviews__list}>
          {results.map(item => (
            <ReviewsItem key={item.id} item={item} />
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

export default MovieReviews;
