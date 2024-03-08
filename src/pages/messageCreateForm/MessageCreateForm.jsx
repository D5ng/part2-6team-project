import React from 'react';
import * as S from 'pages/messageCreateForm/MessageCreateForm.style';
import { ImagePickerModalProvider } from '@Components/imagePickerModal/ImagePickerModalContext';
import MessageForm from './components/MessageForm';

function MessageCreateForm() {
  return (
    <ImagePickerModalProvider>
      <S.FormContainer>
        <MessageForm />
      </S.FormContainer>
    </ImagePickerModalProvider>
  );
}

export default MessageCreateForm;
