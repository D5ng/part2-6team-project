import React from 'react';
import StyledBackdrop from './Backdrop.style';

function Backdrop({ onCloseModal }) {
  return <StyledBackdrop onClick={onCloseModal} />;
}

export default Backdrop;
