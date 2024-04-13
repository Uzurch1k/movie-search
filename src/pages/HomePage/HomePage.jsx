import MovieList from '../../components/MovieList/MovieList';

import css from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={css.home}>
      <MovieList />
    </section>
  );
};

export default HomePage;
