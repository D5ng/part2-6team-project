import React, { useState } from 'react';

function useModal() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null,
  });

  const getModalData = (data) => setModalState((prevModalState) => ({ ...prevModalState, data }));

  const handleOpenModal = () => setModalState((prevModalState) => ({ ...prevModalState, isOpen: true }));

  const handleCloseModal = () => setModalState((prevModalState) => ({ ...prevModalState, isOpen: false }));

  return {
    modalState,
    getModalData,
    handleOpenModal,
    handleCloseModal,
  };
}

export default useModal;
