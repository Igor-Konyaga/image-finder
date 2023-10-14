import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ bigImg, onClickImg, img }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <a href={bigImg} onClick={onClickImg}>
        <img
          className={css.ImageGalleryItemImage}
          loading="lazy"
          src={img}
          alt=""
        />
      </a>
    </li>
  );
};
