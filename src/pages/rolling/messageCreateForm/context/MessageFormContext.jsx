import React, { createContext, useContext, useMemo, useState } from 'react';

const MessageFormContext = createContext();

export const useMessageFormContext = () => useContext(MessageFormContext);

export function MessageFormContextProvider({ children }) {
  const [inputFrom, setInputFrom] = useState('');
  const [profileImgSrc, setProfileImgSrc] = useState('/images/icons/profileDefault.svg');
  const values = useMemo(
    () => ({
      inputFrom,
      setInputFrom,
      profileImgSrc,
      setProfileImgSrc,
    }),
    [inputFrom, setInputFrom, profileImgSrc, setProfileImgSrc],
  );
  return <MessageFormContext.Provider value={values}>{children}</MessageFormContext.Provider>;
}
