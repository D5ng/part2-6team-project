import useHttp from 'hooks/useHttp';
import React, { useState, createContext, useEffect } from 'react';
import * as API from '@Paper/api';
import { useParams } from 'react-router-dom';
import useModal from '@Paper/hooks/useModal';

export const PaperContext = createContext();

export function PaperContextProvider({ children }) {
  const { recipientsId } = useParams();
  const { state: paperState, fetchRequest: paperFetchRequest } = useHttp();
  const { state: messageState, fetchRequest: messageFetchRequest } = useHttp();
  // const { state: messageState, fetchRequest: messageFetchRequest } = useFetchData();
  const { modalState, handleCloseModal, handleOpenModal, getModalData } = useModal();

  useEffect(() => {
    paperFetchRequest({ url: API.getRollingPaper(recipientsId) });
    messageFetchRequest({ url: API.getRollingPaperMessage(recipientsId) });
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    paperState,
    messageState,
    modal: { modalState, handleOpenModal, handleCloseModal, getModalData },
    messageFetchRequest,
  };
  return <PaperContext.Provider value={value}>{children}</PaperContext.Provider>;
}
