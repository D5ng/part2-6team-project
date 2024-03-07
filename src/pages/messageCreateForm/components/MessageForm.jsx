// React 관련 패키지
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
// 공통 컴포넌트
import Input from '@Components/form/Input';
import Dropdown from '@Components/form/Dropdown';
import PrimaryCreateBtn from '@Components/ui/PrimaryCreateBtn';
import ImagePickerModal from '@Components/imagePickerModal/ImagePickerModal';
import Loading from '@Components/ui/Loading';
// context, api, style
import { useImagePickerModalContext } from '@Components/imagePickerModal/ImagePickerModalContext';
import { useMessageFormContext } from '../context/MessageFormContext';
// eslint-disable-next-line import/named
import { errorHandling, createMessage } from '../api';
import * as S from './MessageForm.style';
// 현재 페이지에서만 사용하는 컴포넌트
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
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);
  const submitForm = async (e) => {
    e.preventDefault();
    const postMessage = message.ops && message.ops.map((messages) => messages.insert).join('\n');
    const messageInformation = {
      sender: fromName.target.value,
      relationship: currentSelect.relation,
      content: postMessage,
      font: currentSelect.font,
      profileImageURL: currentProfileImg,
    };
    try {
      setIsLoading(true);
      const requestState = await createMessage(params.id, messageInformation);
      errorHandling(requestState.ok, requestState.status, () => {
        navigate(`/post/${params.id}`);
      });
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
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
      <PrimaryCreateBtn disabled={!(messageLength !== 1 && fromName.target) || isLoading}>
        {isLoading ? <Loading /> : '생성하기'}
      </PrimaryCreateBtn>
      {active && modal}
    </S.Form>
  );
}

export default MessageForm;
