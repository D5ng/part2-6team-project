import React from 'react';
import { createPortal } from 'react-dom';

function Modal(component) {
  return createPortal(component, document.getElementById('modal-root'));
}

export default Modal;
