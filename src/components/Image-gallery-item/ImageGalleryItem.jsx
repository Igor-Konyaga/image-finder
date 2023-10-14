import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <a href={this.props.bigImg} onClick={this.props.onClickImg}>
          <img
            className={css.ImageGalleryItemImage}
            loading="lazy"
            src={this.props.img}
            alt=""
          />
        </a>
      </li>
    );
  }
}
