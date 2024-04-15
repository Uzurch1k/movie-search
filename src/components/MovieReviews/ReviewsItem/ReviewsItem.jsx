import { FaUserAstronaut } from 'react-icons/fa';
import css from './ReviewsItem.module.scss';

const ReviewsItem = ({ item }) => {
  const {
    author,
    content,
    author_details: { avatar_path },
  } = item;
  return (
    <li className={css.item}>
      <div className={css.wrapp__img}>
        {avatar_path ? (
          <img src={`https://image.tmdb.org/t/p/w500/${avatar_path}`} />
        ) : (
          <FaUserAstronaut className={css.user} />
        )}
      </div>
      <div className={css.info}>
        <p className={css.author}>
          <span>Author:</span> {author}
        </p>
        <p className={css.text}>{content}</p>
      </div>
    </li>
  );
};

export default ReviewsItem;
