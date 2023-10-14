import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onHandleKey);

  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onHandleKey);
  }
 
  render() {
    return (
      <div className={css.Overlay} onClick={this.props.onCloseBtb}>
        <div className={css.Modal}>
          <img src={this.props.urlImg} alt="" />
        </div>
      </div>
    );
  }
}
