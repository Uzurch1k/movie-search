import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchMoviesDetails } from '../../API/FetchMovies';

import css from './MovieDetailsPage.module.scss';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

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
      <Link to={backLink} className={css.link}>
        Back
      </Link>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      )}

      {title && (
        <h2>
          {title} {release_date && <span>({release_date.split('-')[0]})</span>}
        </h2>
      )}

      <ul>
        {vote_average > 0 && <li>Rating: {vote_average}</li>}
        {budget > 0 && <li>Budget: ${budget.toLocaleString()}</li>}
      </ul>

      {overview && (
        <>
          <h3>Overview</h3>
          <p>{overview}</p>
        </>
      )}

      {genres?.length > 0 && (
        <>
          <h3>Genres</h3>
          <ul>
            {genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </>
      )}

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
