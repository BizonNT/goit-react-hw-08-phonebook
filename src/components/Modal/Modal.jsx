import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import css from './modal.module.css';
import ChangeContactForm from '../ChangeContactForm/ChangeContactForm';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, contact }) {
  const closeModal = useCallback(
    ({target, currentTarget, code}) => {
      if (code === 'Escape' || currentTarget === target) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [closeModal]);


  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <ChangeContactForm contact={ contact} />
      </div>
    </div>,
    modalRoot
  );
}
