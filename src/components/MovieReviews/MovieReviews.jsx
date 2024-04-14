import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../API/FetchMovies';

import ReviewsItem from './ReviewsItem/ReviewsItem';

import css from './MovieReviews.module.scss';

const MovieReviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        const res = await fetchMoviesReviews(id);
        setMovieReviews(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResponse();
  }, [id]);

  const { results } = movieReviews;

  return (
    <div className={css.reviews}>
      <ul>
        {results?.length > 0 ? (
          results.map(item => <ReviewsItem key={item.id} item={item} />)
        ) : (
          <p>Not found</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
