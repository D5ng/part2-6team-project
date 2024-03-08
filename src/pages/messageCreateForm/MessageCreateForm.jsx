import React from 'react';
import * as S from 'pages/messageCreateForm/MessageCreateForm.style';
import { UnsplashModalContextProvider } from '@Components/unsplashModal/UnsplashModalContext';
import MetaTag from '@Pages/SEOMetaTag';
import MessageForm from './components/MessageForm';

function MessageCreateForm() {
  return (
    <UnsplashModalContextProvider>
      <MetaTag title="롤링 페이퍼 - 작성" description="프로필 이미지를 설정하고 감동적인 메시지를 전달해보세요."  />

      <S.FormContainer>
        <MessageForm />
      </S.FormContainer>
    </UnsplashModalContextProvider>
  );
}

export default MessageCreateForm;
