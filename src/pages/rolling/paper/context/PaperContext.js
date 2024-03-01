import useHttp from 'hooks/useHttp';
import React, { createContext, useEffect } from 'react';
import * as API from '@Paper/api';
import { useParams } from 'react-router-dom';

export const PaperContext = createContext();

export function PaperContextProvider({ children }) {
  const { recipientsId } = useParams();
  const { state: paperState, fetchRequest: paperFetchRequest } = useHttp();
  const { state: messageState, fetchRequest: messageFetchRequest } = useHttp();

  useEffect(() => {
    paperFetchRequest({ url: API.getRollingPaper(recipientsId) });
    messageFetchRequest({ url: API.getRollingPaperMessage(recipientsId) });
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    paperState,
    messageState,
  };
  return <PaperContext.Provider value={value}>{children}</PaperContext.Provider>;
}
