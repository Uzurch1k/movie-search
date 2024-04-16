import { Link } from 'react-router-dom';

import { TbFaceIdError } from 'react-icons/tb';
import css from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={css.section}>
      <div className={css.found}>
        <TbFaceIdError />
      </div>
      <div className={css.wrapp__link}>
        <Link to="/" className={css.link}>
          Go back to home page
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
