import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../API/FetchMovies';

import ReviewsItem from './ReviewsItem/ReviewsItem';

import { TbFaceIdError } from 'react-icons/tb';
import css from './MovieReviews.module.scss';

const MovieReviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setNotFound(false);
        const res = await fetchMoviesReviews(id);
        setMovieReviews(res.data);
        if (!movieReviews.results?.length > 0) setNotFound(true);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
    }
    fetchResponse();
  }, [id]);

  const { results } = movieReviews;

  return (
    <div className={css.reviews}>
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
