import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../../API/FetchMovies';

import MovieList from '../../components/MovieList/MovieList';
import FormSubmit from '../../components/FormSubmit/FormSubmit';

import css from './MoviesPage.module.scss';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieSearch, setMovieSearch] = useState([]);
  const moviesName = searchParams.get('query') ?? '';

  useEffect(() => {
    async function fetchResponse() {
      try {
        const res = await fetchMoviesSearch(moviesName);
        setMovieSearch(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResponse();
  }, [searchParams]);

  return (
    <section className={css.section}>
      <FormSubmit setSearchParams={setSearchParams} />
      <MovieList movieResults={movieSearch} />
    </section>
  );
};

export default MoviesPage;
