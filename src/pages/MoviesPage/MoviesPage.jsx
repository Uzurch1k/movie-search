import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../../API/FetchMovies';

import MovieList from '../../components/MovieList/MovieList';
import FormSubmit from '../../components/FormSubmit/FormSubmit';

import { Loader } from '../../components/Loader/Loader';

import { TbFaceIdError } from 'react-icons/tb';
import css from './MoviesPage.module.scss';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieSearch, setMovieSearch] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loader, setLoader] = useState(false);

  const moviesName = searchParams.get('query') ?? '';

  useEffect(() => {
    async function fetchResponse() {
      try {
        setLoader(true);
        setNotFound(false);
        const res = await fetchMoviesSearch(moviesName);
        const dataResults = res.data.results;
        setMovieSearch(dataResults);
        if (moviesName && !dataResults?.length > 0) setNotFound(true);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      } finally {
        setLoader(false);
      }
    }
    fetchResponse();
  }, [moviesName]);

  return (
    <section className={css.movies}>
      {loader && <Loader />}
      <FormSubmit setSearchParams={setSearchParams} />
      <MovieList movieResults={movieSearch} />
      {notFound && (
        <div className={css.found}>
          <TbFaceIdError />
        </div>
      )}
    </section>
  );
};

export default MoviesPage;
