import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={css.section}>
      <Link to="/">Home</Link>
      <p>NotFoundPage</p>
    </section>
  );
};

export default NotFoundPage;
