import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/Image-gallery-item/ImageGalleryItem';

export class ImageGallery extends Component {
	
  
  render() {
    const validArr =
      Array.isArray(this.props.images) && this.props.images.length;
    return (
      <ul className={css.ImageGallery}>
        {validArr &&
          this.props.images.map(img => {
            return ( 
              <ImageGalleryItem
                key={img.id}
                img={img.webformatURL}
                bigImg={img.largeImageURL}
                onClickImg={this.props.onClickImg}
					 
              />
            );
          })}
      </ul>
    );
  }
}
