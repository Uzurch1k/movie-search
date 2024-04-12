import { NavLink } from 'react-router-dom';
import github from './img/git-hub.jpg';
import css from './Navigation.module.scss';

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.body}>
          <h1 className={css.title}>Movie search</h1>

          <nav className={css.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
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
