import React, { createContext, useContext, useMemo, useReducer, useState } from 'react';

const MessageFormContext = createContext();

export const useMessageFormContext = () => useContext(MessageFormContext);

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
  const [currentProfileImg, setCurrentProfileImg] = useState('');
  const [currentSelect, dispatch] = useReducer(reducer, { relation: '친구', font: 'Noto Sans' });
  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');
  const [toggleModal, setToggleModal] = useState(false);

  const values = useMemo(
    () => ({
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
