import { useState, useEffect, useRef, Suspense } from 'react';
import {
  useLocation,
  useParams,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';
import { fetchMoviesDetails } from '../../API/FetchMovies';

import { Loader, LoaderDetails } from '../../components/Loader/Loader';

import { IoChevronBackSharp } from 'react-icons/io5';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.scss';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.nav__link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  const backLink = useRef(location.state ?? '/movies');
  const [loaderContent, setLoaderContent] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchResponse() {
      try {
        setLoader(true);
        setLoaderContent(false);
        const res = await fetchMoviesDetails(id);
        setMovieDetails(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
        setLoaderContent(true);
      }
    }
    fetchResponse();
  }, [id]);

  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    budget,
    genres,
    backdrop_path,
    production_companies,
  } = movieDetails;

  console.log(production_companies);

  return (
    <section className={css.details}>
      {loader && <Loader />}
      {loaderContent && (
        <>
          <div className={css.wrapp__back}>
            <Link to={backLink.current} className={css.back__link}>
              <IoChevronBackSharp /> Go back
            </Link>
          </div>

          <div className={css.body}>
            {backdrop_path && (
              <>
                <img
                  className={css.bg__img}
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt={title}
                />
                <div className={css.blur}></div>
              </>
            )}
            {poster_path && (
              <div className={css.wrapp__img}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
              </div>
            )}

            <div className={css.wrapp__content}>
              {title && (
                <h2 className={css.title}>
                  {title}{' '}
                  {release_date && <span>({release_date.split('-')[0]})</span>}
                </h2>
              )}

              {(vote_average > 0 || budget > 0) && (
                <ul className={css.info__list}>
                  {vote_average > 0 && (
                    <li className={css.text}>Rating: {vote_average}</li>
                  )}
                  {budget > 0 && (
                    <li className={css.text}>
                      Budget: ${budget.toLocaleString()}
                    </li>
                  )}
                </ul>
              )}

              {overview && (
                <div className={css.overview}>
                  <h3 className={css.subtitle}>Overview:</h3>
                  <p className={css.text}>{overview}</p>
                </div>
              )}

              {genres?.length > 0 && (
                <div className={css.genres}>
                  <h3 className={css.subtitle}>Genres:</h3>
                  <ul className={css.genres__list}>
                    {genres.map(item => (
                      <li key={item.id} className={css.text}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {production_companies && (
                <ul className={css.companies}>
                  {production_companies.map(({ id, logo_path, name }) => (
                    <li key={id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                        alt={name}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <ul className={css.more__list}>
            <li>
              <NavLink to="cast" className={buildLinkClass}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<LoaderDetails />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </section>
  );
};

export default MovieDetailsPage;
