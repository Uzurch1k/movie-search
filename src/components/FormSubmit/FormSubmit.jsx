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
        btn
      </button>
    </form>
  );
};

export default FormSubmit;
