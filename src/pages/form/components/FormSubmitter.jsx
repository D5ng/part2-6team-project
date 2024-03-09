/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@Form/components/FormSubmitter.style';
import { useFormContext } from '@Form/context/FormContext';
import useAsync from 'hooks/useAsync';
import Input from '@Components/form/Input';
import PrimaryCreateBtn from '@Components/ui/PrimaryCreateBtn';
import Loading from '@Components/ui/Loading';
import ToggleButton from '@Form/components/ToggleButton';
import BackgroundOptions from '@Form/components/BackgroundOptions';
import { useUnsplashModalContext } from '@Components/unsplashModal/UnsplashModalContext';
import { createPaper } from '@Form/services';
import * as Portal from '@Components/portal';
import Backdrop from '@Components/modal/Backdrop';
import useModal from 'hooks/useModal';
import UnsplashModal from '@Components/unsplashModal/UnsplashModal';
import useInput from 'hooks/useInput';
import ReCAPTCHA from 'react-google-recaptcha';

function FormSubmitter() {
  const recaptcha = useRef();
  const navigate = useNavigate();
  const { handleLoadPapersInfo, papersInfo, selectedBtn, unsplashImageState } = useFormContext();
  const { selectedItem } = useUnsplashModalContext();
  const [isSubmitting, submittingError, onSubmitAsync] = useAsync(createPaper);
  const { modalState, handleOpenModal, handleCloseModal } = useModal();

  const { state: nameState, hasError, handleChange: handleChangeName, handleBlur: handleBlurName } = useInput();
  const errorMessage = hasError && '이름을 입력해주세요 🙏';


  const [isCapcha, setIsCapcha] = useState(null)

  const handleCapcha = () => {
    const captchaValue = recaptcha.current?.getValue();
    setIsCapcha(captchaValue)
  }
  
  
  const handleCreatePaper = async (e) => {
    e.preventDefault();
    if (isSubmitting || nameState.value === '' || !isCapcha) return;
    const newPaperData = { name: nameState.value, backgroundColor: selectedItem };
    if (selectedBtn === 'image') {
      newPaperData.backgroundColor = 'beige';
      newPaperData.backgroundImageURL = selectedItem;
    }

    const createdPaper = await onSubmitAsync(newPaperData);
    if (createdPaper) {
      navigate(`/post/${createdPaper.id}`);
    }
  };

  const backdrop = Portal.Backdrop(<Backdrop onCloseModal={handleCloseModal} />);
  const modal = Portal.Modal(<UnsplashModal onCloseModal={handleCloseModal} unsplashImageState={unsplashImageState} />);

  return (
    <S.Wrapper>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}

      <S.Title>To. {nameState.value}</S.Title>
      <Input error={errorMessage} value={nameState.value} onChange={handleChangeName} onBlur={handleBlurName}>
        받는 사람 이름을 입력해 주세요
      </Input>

      <S.BackgroundTitle>배경화면을 선택해 주세요.</S.BackgroundTitle>
      <S.Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</S.Description>
      {unsplashImageState.hasError && <S.ErrorInfo>지금은 이미지를 사용할 수 없어요 😂</S.ErrorInfo>}
      <ToggleButton />
      <BackgroundOptions onOpenModal={handleOpenModal} />

      <ReCAPTCHA ref={recaptcha} onChange={handleCapcha} sitekey={process.env.REACT_APP_SITEKEY} />

      <PrimaryCreateBtn
        onClick={handleCreatePaper}
        disabled={nameState.value === '' || errorMessage || !isCapcha}
      >
        {isSubmitting ? <Loading /> : '생성하기'}
      </PrimaryCreateBtn>
    </S.Wrapper>
  );
}

export default FormSubmitter;
