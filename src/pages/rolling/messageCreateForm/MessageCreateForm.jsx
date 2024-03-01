import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/MessageCreateForm.style';
import Input from '@Components/form/Input';
import Dropdown from '@Components/form/Dropdown';
import { PrimaryCreateBtn } from '@Components/ui/PrimaryComponent.style';
import PreviewImg from './components/PreviewImg';
import TextEditor from './components/TextEditor';
import { MessageFormContextProvider } from './context/MessageFormContext';
import ProfileImgList from './components/ProfileImgList';

function MessageCreateForm() {
  return (
    <MessageFormContextProvider>
      <S.FormContainer>
        <S.Form>
          <S.Wrapper>
            <S.InputTitle>From.</S.InputTitle>
            <Input errorMessage="값을 입력해 주세요">이름을 입력해 주세요</Input>
          </S.Wrapper>
          <S.Wrapper>
            <S.InputTitle>프로필 이미지</S.InputTitle>
            <S.ProfileImgBox>
              <PreviewImg />
              <S.ProfileImgListWrap>
                <S.ProfileListTitle>프로필 이미지를 선택해주세요!</S.ProfileListTitle>
                <ProfileImgList />
              </S.ProfileImgListWrap>
            </S.ProfileImgBox>
          </S.Wrapper>
          <S.Wrapper>
            <S.InputTitle>상대와의 관계</S.InputTitle>
            <Dropdown type="relation" />
          </S.Wrapper>
          <S.Wrapper>
            <S.InputTitle>내용을 입력해 주세요</S.InputTitle>
            <TextEditor />
          </S.Wrapper>
          <S.Wrapper>
            <S.InputTitle>폰트 선택</S.InputTitle>
            <Dropdown type="font" />
          </S.Wrapper>
          <PrimaryCreateBtn>생성하기</PrimaryCreateBtn>
        </S.Form>
      </S.FormContainer>
    </MessageFormContextProvider>
  );
}

export default MessageCreateForm;
