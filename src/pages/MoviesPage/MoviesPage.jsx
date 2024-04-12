import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.scss';

const MoviesPage = () => {
  return (
    <section className={css.section}>
      <p>MoviesPage</p>
      <MovieList />
    </section>
  );
};

export default MoviesPage;
