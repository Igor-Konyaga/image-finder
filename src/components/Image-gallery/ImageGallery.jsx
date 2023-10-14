import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/Image-gallery-item/ImageGalleryItem';

export const ImageGallery = ({ images, onClickImg }) => {
  const validArr = Array.isArray(images) && images.length;

  return (
    <ul className={css.ImageGallery}>
      {validArr &&
        images.map(img => {
          return (
            <ImageGalleryItem
              key={img.id}
              img={img.webformatURL}
              bigImg={img.largeImageURL}
              onClickImg={onClickImg}
            />
          );
        })}
    </ul>
  );
};
