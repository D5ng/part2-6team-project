import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/MessageCreateForm.style';

import { UnsplashModalContextProvider } from '@Components/unsplashModal/UnsplashModalContext';
import { MessageFormContextProvider } from './context/MessageFormContext';

import MessageForm from './components/MessageForm';

function MessageCreateForm() {
  return (
    <MessageFormContextProvider>
      <UnsplashModalContextProvider>
        <S.FormContainer>
          <MessageForm />
        </S.FormContainer>
      </UnsplashModalContextProvider>
    </MessageFormContextProvider>
  );
}

export default MessageCreateForm;
