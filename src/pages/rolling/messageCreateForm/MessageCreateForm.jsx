import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/MessageCreateForm.style';

import { ImagePickerModalProvider } from '@Components/imagePickerModal/ImagePickerModalContext';
import { MessageFormContextProvider } from './context/MessageFormContext';

import MessageForm from './components/MessageForm';
import MoreImgModal from './components/MoreImgModal';

function MessageCreateForm() {
  return (
    <MessageFormContextProvider>
      <ImagePickerModalProvider>
        <S.FormContainer>
          <MessageForm />
        </S.FormContainer>
      </ImagePickerModalProvider>
    </MessageFormContextProvider>
  );
}

export default MessageCreateForm;
