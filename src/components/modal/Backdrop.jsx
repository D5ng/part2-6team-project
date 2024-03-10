import React from 'react';
import StyledBackdrop from './Backdrop.style';

function Backdrop({ onCloseModal }) {
  const handleClick = () => onCloseModal();
  return <StyledBackdrop onClick={handleClick} />;
}

export default Backdrop;
