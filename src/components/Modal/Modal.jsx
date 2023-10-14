import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ onCloseBtb, urlImg, onHandleKey }) => {
  useEffect(() => {
    window.addEventListener('keydown', onHandleKey);

    return () => {
      window.removeEventListener('keydown', onHandleKey);
    };
  }, [onHandleKey]);

  return (
    <div className={css.Overlay} onClick={onCloseBtb}>
      <div className={css.Modal}>
        <img src={urlImg} alt="" />
      </div>
    </div>
  );
};
