import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from '../../API/FetchMovies';

import { Loader } from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';

import css from './HomePage.module.scss';

const HomePage = () => {
  const [movieTrend, setMovieTrend] = useState([]);
  const [loaderContent, setLoaderContent] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchResponse() {
      try {
        setLoader(true);
        setLoaderContent(false);
        const res = await fetchMoviesTrending();
        setMovieTrend(res.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
        setLoaderContent(true);
      }
    }
    fetchResponse();
  }, []);

  return (
    <section className={css.home}>
      {loader && <Loader />}
      {loaderContent && (
        <>
          <h2 className={css.title}>Trending today</h2>
          <MovieList movieResults={movieTrend} />
        </>
      )}
    </section>
  );
};

export default HomePage;
