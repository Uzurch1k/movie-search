import css from './CastItem.module.scss';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

const CastItem = ({ item }) => {
  const { profile_path, name, character } = item;
  return (
    <li className={css.item}>
      <div className={css.wrapp}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : defaultImg
          }
          alt={name}
        />
      </div>

      <div className={css.info}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>Character: {character}</p>
      </div>
    </li>
  );
};

export default CastItem;
