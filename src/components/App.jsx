import Notiflix from 'notiflix';
import css from './App.module.css';
import { Button } from './Button/Button';
import { ImageGallery } from './Image-gallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Search-bar/SearchBar';
import { fetchImg } from 'services/api';
import { Modal } from './Modal/Modal';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [urlBigImg, setUrlBigImg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    fetchSearchImg();
  }, [page, search]);

  const fetchSearchImg = async () => {
    try {
      const { hits, totalHits } = await fetchImg(search, page);
      if (totalHits === 0) {
        Notiflix.Notify.info(`No results found for ${search}`);
        return;
      } else if (page === 1) {
        Notiflix.Notify.success(
          `${totalHits} images were found for the '${search}' query`
        );
      }

      setImages(prevState => [...(prevState || []), ...hits]);
      setLoadMore(page < Math.ceil(totalHits / 12));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = e => {
    if (e.key === 'Escape') {
      setModal(false);
    }
  };

  const onSubmitForm = searchValue => {
    if (!searchValue) {
      Notiflix.Notify.warning('Enter a search query!');
      return;
    } else if (searchValue === search) {
      Notiflix.Notify.info('This search query is already displayed!');
      return;
    }

    setSearch(searchValue);
    setIsLoading(true);
    setLoadMore(false);
    setImages(null);
    setPage(1);
  };

  const handleClick = e => {
    setPage(prevState => prevState + 1);
  };

  const handleClickImg = e => {
    e.preventDefault();

    setModal(true);
    setUrlBigImg(e.currentTarget.href);
  };

  const onCloseBtb = e => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onSubmitForm} />
      {isLoading && <Loader />}
      <ImageGallery
        images={images}
        onClickImg={handleClickImg}
        onCloseBtb={onCloseBtb}
      />
      {loadMore && <Button handleClick={handleClick} />}
      {modal && (
        <Modal
          urlImg={urlBigImg}
          onCloseBtb={onCloseBtb}
          onHandleKey={handleKey}
        />
      )}
      {error && Notiflix.Notify.failure(error)}
    </div>
  );
};
