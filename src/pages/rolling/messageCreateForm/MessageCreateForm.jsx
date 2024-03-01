import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/MessageCreateForm.style';

import { MessageFormContextProvider } from './context/MessageFormContext';

import MessageForm from './components/MessageForm';

function MessageCreateForm() {
  return (
    <MessageFormContextProvider>
      <S.FormContainer>
        <MessageForm />
      </S.FormContainer>
    </MessageFormContextProvider>
  );
}

export default MessageCreateForm;
