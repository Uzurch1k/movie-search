import { NavLink } from 'react-router-dom';
import github from './img/git-hub.jpg';

import clsx from 'clsx';
import css from './Navigation.module.scss';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.nav__link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.body}>
          <h1 className={css.title}>Movie search</h1>

          <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </nav>

          <a
            className={css.link}
            href="https://github.com/Uzurch1k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
