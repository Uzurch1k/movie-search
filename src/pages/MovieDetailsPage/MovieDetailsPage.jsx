import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchMoviesDetails } from '../../API/FetchMovies';

import css from './MovieDetailsPage.module.scss';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  const backLink = location.state ?? '/movies';

  useEffect(() => {
    async function fetchResponse() {
      try {
        const res = await fetchMoviesDetails(id);
        setMovieDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResponse();
  }, []);

  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    budget,
    genres,
  } = movieDetails;

  return (
    <section className={css.details}>
      <Link to={backLink} className={css.back__link}>
        Back
      </Link>

      <div className={css.content}>
        {poster_path && (
          <div className={css.wrapp__img}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </div>
        )}

        {title && (
          <h2 className={css.title}>
            {title}{' '}
            {release_date && <span>({release_date.split('-')[0]})</span>}
          </h2>
        )}

        <ul className={css.info__list}>
          {vote_average > 0 && (
            <li className={css.text}>Rating: {vote_average}</li>
          )}
          {budget > 0 && (
            <li className={css.text}>Budget: ${budget.toLocaleString()}</li>
          )}
        </ul>

        {overview && (
          <>
            <h3 className={css.subtitle}>Overview</h3>
            <p className={css.text}>{overview}</p>
          </>
        )}

        {genres?.length > 0 && (
          <>
            <h3 className={css.subtitle}>Genres</h3>
            <ul className={css.genres__list}>
              {genres.map(item => (
                <li key={item.id} className={css.text}>
                  {item.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;
