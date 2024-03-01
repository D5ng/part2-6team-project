import React, { useState } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
}

export default useModal;
