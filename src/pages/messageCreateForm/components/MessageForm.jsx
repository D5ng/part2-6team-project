/* eslint-disable import/no-extraneous-dependencies */
// React 관련 패키지
import React, { useEffect, useReducer, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

// 공통 컴포넌트
import Input from '@Components/form/Input';
import Dropdown from '@Components/form/Dropdown';
import PrimaryCreateBtn from '@Components/ui/PrimaryCreateBtn';

import Loading from '@Components/ui/Loading';
// context, api, style

// eslint-disable-next-line import/named
import { useUnsplashModalContext } from '@Components/unsplashModal/UnsplashModalContext';
import UnsplashModal from '@Components/unsplashModal/UnsplashModal';
import useModal from 'hooks/useModal';
import useDefaultBackgroundImage from '@Pages/form/hooks/useDefaultBackgroundImage';
import { GET_RANDOM_IMAGE } from 'service/unplash';
import * as Portal from '@Components/portal';
import Backdrop from '@Components/modal/Backdrop';
import { errorHandling, createMessage, formValidCheck } from '../api';
import * as S from './MessageForm.style';
// 현재 페이지에서만 사용하는 컴포넌트
import PreviewImg from './PreviewImg';
import TextEditor from './TextEditor';
// eslint-disable-next-line import/no-cycle
import ProfileImgList from './ProfileImgList';
import PreviewCard from './PreviewCard';

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'sender':
      return { ...state, sender: action.sender };
    case 'relationship':
      return { ...state, relationship: action.relationship };
    case 'content':
      return { ...state, content: action.content };
    case 'font':
      return { ...state, font: action.font };
    case 'profileImageURL':
      return { ...state, profileImageURL: action.profileImageURL };
  }
};
export const DEFAULT_PROFILE_IMG =
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png';
function MessageForm() {
  const recaptcha = useRef();
  const params = useParams();
  const navigate = useNavigate();
  const { selectedItem } = useUnsplashModalContext();
  const [inputInformation, dispatch] = useReducer(reducer, {
    sender: '',
    relationship: '친구',
    content: '',
    font: 'Noto Sans',
    profileImageURL: DEFAULT_PROFILE_IMG,
  });
  const [messageLength, setMessageLength] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isCapcha, setIsCapcha] = useState(null);

  const { modalState, handleOpenModal, handleCloseModal } = useModal();

  const handleCapcha = () => {
    const captchaValue = recaptcha.current?.getValue();
    setIsCapcha(captchaValue);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (!isCapcha) return;
      const requestState = await createMessage(params.id, inputInformation);
      errorHandling(requestState.ok, requestState.status, () => {
        navigate(`/post/${params.id}`);
      });
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleOnChangeInput = (e) => {
    dispatch({ type: 'sender', sender: e.target.value });
  };

  const { state: unsplashImageState, fetchRequest: unsplashFetchRequest } = useDefaultBackgroundImage();

  useEffect(() => {
    unsplashFetchRequest({ url: GET_RANDOM_IMAGE(8) });
  }, []);

  useEffect(() => {
    if (selectedItem) {
      dispatch({ type: 'profileImageURL', profileImageURL: selectedItem });
    }
  }, [selectedItem]);

  const disabled = !(messageLength !== 1 && inputInformation.sender) || isLoading || !isCapcha;
  const backdrop = Portal.Backdrop(<Backdrop onCloseModal={handleCloseModal} />);
  const modal = Portal.Modal(<UnsplashModal onCloseModal={handleCloseModal} unsplashImageState={unsplashImageState} />);

  return (
    <S.Form onSubmit={submitForm}>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
      <S.Wrapper>
        <S.InputTitle>From. {inputInformation.sender}</S.InputTitle>
        <Input onChange={handleOnChangeInput} value={inputInformation.sender}>
          이름을 입력해 주세요
        </Input>
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>프로필 이미지</S.InputTitle>
        <S.ProfileImgBox>
          <PreviewImg currentImg={inputInformation.profileImageURL} />
          <S.Wrapper>
            <S.ProfileListTitle>
              {!unsplashFetchRequest.hasError ? (
                <S.OverRequestMessage> 지금은 이미지를 사용할 수 없어요 😂</S.OverRequestMessage>
              ) : (
                ' 프로필 이미지를 선택해주세요!'
              )}
            </S.ProfileListTitle>
            <ProfileImgList unsplashImageState={unsplashImageState} openModal={handleOpenModal} dispatch={dispatch} />
          </S.Wrapper>
        </S.ProfileImgBox>
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>상대와의 관계</S.InputTitle>
        <Dropdown dispatch={dispatch} type="relation" />
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>내용을 입력해 주세요</S.InputTitle>
        <TextEditor dispatch={dispatch} messageLength={setMessageLength} />
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>폰트 선택</S.InputTitle>
        <Dropdown dispatch={dispatch} type="font" />
      </S.Wrapper>
      <S.Wrapper>
        <S.InputTitle>카드 미리보기</S.InputTitle>
        <PreviewCard information={inputInformation} />
      </S.Wrapper>
      <ReCAPTCHA ref={recaptcha} onChange={handleCapcha} sitekey={process.env.REACT_APP_SITEKEY} />

      <PrimaryCreateBtn disabled={disabled}>{isLoading ? <Loading /> : '생성하기'}</PrimaryCreateBtn>
    </S.Form>
  );
}

export default MessageForm;
