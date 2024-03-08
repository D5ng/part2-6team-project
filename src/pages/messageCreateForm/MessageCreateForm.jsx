import React from 'react';
import * as S from 'pages/messageCreateForm/MessageCreateForm.style';
import { UnsplashModalContextProvider } from '@Components/unsplashModal/UnsplashModalContext';
import MessageForm from './components/MessageForm';

function MessageCreateForm() {
  return (
    <UnsplashModalContextProvider>
      <S.FormContainer>
        <MessageForm />
      </S.FormContainer>
    </UnsplashModalContextProvider>
  );
}

export default MessageCreateForm;
