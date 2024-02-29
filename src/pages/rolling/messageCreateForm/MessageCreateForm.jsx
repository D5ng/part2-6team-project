import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/MessageCreateForm.style';
import Input from '@Components/form/Input';
import Dropdown from '@Components/form/Dropdown';
import { PrimaryCreateBtn } from '@Components/ui/PrimaryComponent.style';
import PreviewImg from './components/PreviewImg';
import ProfileImg from './components/ProfileImg';
import TextEditor from './components/TextEditor';

const List = [
  {
    id: 1,
    src: '/images/profileImg/img1.png',
  },
  {
    id: 2,
    src: '/images/profileImg/img2.png',
  },
  {
    id: 3,
    src: '/images/profileImg/img1.png',
  },
  {
    id: 4,
    src: '/images/profileImg/img2.png',
  },
  {
    id: 5,
    src: '/images/profileImg/img1.png',
  },
  {
    id: 6,
    src: '/images/profileImg/img2.png',
  },
  {
    id: 7,
    src: '/images/profileImg/img1.png',
  },
  {
    id: 8,
    src: '/images/profileImg/img2.png',
  },
  {
    id: 9,
    src: '/images/profileImg/img1.png',
  },
  {
    id: 10,
    src: '/images/profileImg/img2.png',
  },
];

function MessageCreateForm() {
  return (
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
              <S.ProfileImgList>
                {List.map((v) => (
                  <li key={v.id}>
                    <ProfileImg imgSrc={v.src} />
                  </li>
                ))}
              </S.ProfileImgList>
            </S.ProfileImgListWrap>
          </S.ProfileImgBox>
        </S.Wrapper>
        <S.Wrapper>
          <S.InputTitle>상대와의 관계</S.InputTitle>
          <Dropdown />
        </S.Wrapper>
        <S.Wrapper>
          <S.InputTitle>내용을 입력해 주세요</S.InputTitle>
          <TextEditor />
        </S.Wrapper>
        <S.Wrapper>
          <S.InputTitle>폰트 선택</S.InputTitle>
          <Dropdown />
        </S.Wrapper>
        <PrimaryCreateBtn>생성하기</PrimaryCreateBtn>
      </S.Form>
    </S.FormContainer>
  );
}

export default MessageCreateForm;
