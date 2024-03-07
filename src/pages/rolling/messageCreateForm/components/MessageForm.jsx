import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '@Components/form/Input';
import Dropdown from '@Components/form/Dropdown';
import { PrimaryCreateBtn } from '@Components/ui/PrimaryComponent.style';
import { createPortal } from 'react-dom';
import ImagePickerModal from '@Components/unsplashModal/ImagePickerModal';
import { useImagePickerModalContext } from '@Components/unsplashModal/ImagePickerModalContext';
import * as S from './MessageForm.style';
import { useMessageFormContext } from '../context/MessageFormContext';
import { postCreateMessageData } from '../api';
import PreviewImg from './PreviewImg';
import TextEditor from './TextEditor';
import ProfileImgList from './ProfileImgList';
import PreviewCard from './PreviewCard';

function MessageForm() {
  const params = useParams();
  const navigate = useNavigate();
  const { selectedImages } = useImagePickerModalContext();
  const [messageLength, setMessageLength] = useState(1);
  const { currentSelect, message, currentProfileImg, setFromName, fromName, setCurrentProfileImg } =
    useMessageFormContext();
  const [active, setActive] = useState(false);
  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);
  const submitForm = async (e) => {
    e.preventDefault();
    const postMessage = message.ops && message.ops.map((messages) => messages.insert).join('\n');
    const rqusetObject = {
      sender: fromName.target.value,
      relationship: currentSelect.relation,
      content: postMessage,
      font: currentSelect.font,
      profileImageURL: currentProfileImg,
    };
    try {
      const requestState = await postCreateMessageData(params.id, rqusetObject);
      if (requestState.status === 201) {
        navigate(`/post/${params.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCurrentProfileImg(selectedImages);
  }, [selectedImages]);
  const modal = createPortal(<ImagePickerModal closeModal={closeModal} />, document.getElementById('modal-root'));
  return (
    <S.Form onSubmit={submitForm}>
      <S.Wrapper>
        <S.InputTitle>From.{fromName.target ? fromName.target.value : ''}</S.InputTitle>
        <Input
          onChange={setFromName}
          value={fromName.target ? fromName.target.value : ''}
          errorMessage="이름을 입력해 주세요"
        >
          이름을 입력해 주세요
        </Input>
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>프로필 이미지</S.InputTitle>
        <S.ProfileImgBox>
          <PreviewImg />
          <S.ProfileImgListWrap>
            <S.ProfileListTitle>프로필 이미지를 선택해주세요!</S.ProfileListTitle>
            <ProfileImgList openModal={openModal} />
          </S.ProfileImgListWrap>
        </S.ProfileImgBox>
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>상대와의 관계</S.InputTitle>
        <Dropdown type="relation" />
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>내용을 입력해 주세요</S.InputTitle>
        <TextEditor messageLength={setMessageLength} />
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>폰트 선택</S.InputTitle>
        <Dropdown type="font" />
      </S.Wrapper>
      <PreviewCard />
      <PrimaryCreateBtn disabled={!(messageLength !== 1 && fromName.target)} style={{ marginTop: '64px' }}>
        생성하기
      </PrimaryCreateBtn>
      {active && modal}
    </S.Form>
  );
}

export default MessageForm;
