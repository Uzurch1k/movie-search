import css from './ReviewsItem.module.scss';

const ReviewsItem = ({ item }) => {
  const {
    author,
    content,
    author_details: { avatar_path },
  } = item;
  return (
    <li>
      {avatar_path && (
        <img src={`https://image.tmdb.org/t/p/w500/${avatar_path}`} />
      )}
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
