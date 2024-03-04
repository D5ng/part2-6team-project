import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { requsetProfileImgData } from '../api';

const MessageFormContext = createContext();

export const useMessageFormContext = () => useContext(MessageFormContext);

// eslint-disable-next-line consistent-return
const reducer = (state, actions) => {
  // eslint-disable-next-line default-case
  switch (actions.type) {
    case 'relation':
      return { ...state, relation: actions.relation };
    case 'font': {
      return { ...state, font: actions.font };
    }
  }
};

export function MessageFormContextProvider({ children }) {
  const [profileImgSrc, setProfileImgSrc] = useState([]);
  const [currentProfileImg, setCurrentProfileImg] = useState('');
  const [currentSelect, dispatch] = useReducer(reducer, { relation: '친구', font: 'Noto Sans' });
  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');
  const [toggleModal, setToggleModal] = useState(false);
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
      currentSelect,
      dispatch,
      message,
      setMessage,
      fromName,
      setFromName,
      toggleModal,
      setToggleModal,
    }),
    [
      profileImgSrc,
      setProfileImgSrc,
      currentProfileImg,
      setCurrentProfileImg,
      dispatch,
      message,
      setMessage,
      setFromName,
      fromName,
      currentSelect,
      toggleModal,
      setToggleModal,
    ],
  );
  return <MessageFormContext.Provider value={values}>{children}</MessageFormContext.Provider>;
}
