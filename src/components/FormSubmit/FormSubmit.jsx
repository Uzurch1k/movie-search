import css from './FormSubmit.module.scss';

const FormSubmit = ({ handleSubmit }) => {


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
