import React from 'react';
import { createPortal } from 'react-dom';

function Backdrop(component) {
  return createPortal(component, document.getElementById('backdrop-root'));
}

export default Backdrop;
