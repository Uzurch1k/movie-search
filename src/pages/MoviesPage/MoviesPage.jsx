import MovieList from '../../components/MovieList/MovieList';
import FormSubmit from '../../components/FormSubmit/FormSubmit';
import css from './MoviesPage.module.scss';

const MoviesPage = () => {
  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  return (
    <section className={css.section}>
      <FormSubmit handleSubmit={handleSubmit} />

      <MovieList />
    </section>
  );
};

export default MoviesPage;
