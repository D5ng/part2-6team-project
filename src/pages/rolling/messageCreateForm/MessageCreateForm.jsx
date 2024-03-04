import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/MessageCreateForm.style';

import { MessageFormContextProvider } from './context/MessageFormContext';

import MessageForm from './components/MessageForm';
import MoreImgModal from './components/MoreImgModal';

function MessageCreateForm() {
  return (
    <MessageFormContextProvider>
      <S.FormContainer>
        <MessageForm />
      </S.FormContainer>
      <MoreImgModal />
    </MessageFormContextProvider>
  );
}

export default MessageCreateForm;
