import { GoSearch } from 'react-icons/go';
import css from './FormSubmit.module.scss';

const FormSubmit = ({ setSearchParams }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;

    if (search.trim() === '') {
      form.reset();
      return;
    }

    setSearchParams({ query: search });
    form.reset();
  };

  return (
    <div className={css.body}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button className={css.btn} type="submit">
          <GoSearch />
        </button>
      </form>
    </div>
  );
};

export default FormSubmit;
