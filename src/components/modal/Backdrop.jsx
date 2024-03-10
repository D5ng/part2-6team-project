import React from 'react';
import StyledBackdrop from './Backdrop.style';

function Backdrop({ onCloseModal, onSelectedMessage }) {
  const handleClick = () => {
    onCloseModal();
    onSelectedMessage(null);
  };
  return <StyledBackdrop onClick={handleClick} />;
}

export default Backdrop;
