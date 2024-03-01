import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import requsetProfileImgData from '../api';

const MessageFormContext = createContext();

export const useMessageFormContext = () => useContext(MessageFormContext);

export function MessageFormContextProvider({ children }) {
  const [profileImgSrc, setProfileImgSrc] = useState([]);
  const [currentProfileImg, setCurrentProfileImg] = useState('');
  const getProfileImgData = async () => {
    const response = await requsetProfileImgData();
    setProfileImgSrc([...response.imageUrls]);
  };

  useEffect(() => {
    getProfileImgData();
  }, []);
  useEffect(() => {
    setCurrentProfileImg(profileImgSrc[0]);
  }, [profileImgSrc]);
  const values = useMemo(
    () => ({
      profileImgSrc,
      setProfileImgSrc,
      currentProfileImg,
      setCurrentProfileImg,
    }),
    // eslint-disable-next-line max-len
    [profileImgSrc, setProfileImgSrc, currentProfileImg, setCurrentProfileImg],
  );
  return <MessageFormContext.Provider value={values}>{children}</MessageFormContext.Provider>;
}
