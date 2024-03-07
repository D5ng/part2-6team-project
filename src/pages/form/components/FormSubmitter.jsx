import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@Form/components/FormSubmitter.style';
import { useFormContext } from '@Form/context/FormContext';
import useAsync from 'hooks/useAsync';
import Input from '@Components/form/Input';
import PrimaryCreateBtn from '@Components/ui/PrimaryCreateBtn';
import Loading from '@Components/ui/Loading';
import ToggleButton from '@Form/components/ToggleButton';
import BackgroundOptions from '@Form/components/BackgroundOptions';
import ImagePickerModal from '@Components/unsplashModal/UnsplashModal';
import { useUnsplashModalContext } from '@Components/unsplashModal/UnsplashModalContext';
import { createPaper } from '@Form/services';
import * as Portal from '@Components/portal';
import Backdrop from '@Components/modal/Backdrop';

function FormSubmitter() {
  const navigate = useNavigate();
  const { handleLoadPapersInfo, papersInfo, handleLoadImages, selectedBtn } = useFormContext();
  const { selectedImages } = useUnsplashModalContext();
  const [name, setName] = useState('');
  const [active, setActive] = useState(false);
  const [isSubmitting, submittingError, onSubmitAsync] = useAsync(createPaper);
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  const handleCreatePaper = async (e) => {
    e.preventDefault();
    if (isSubmitting || name === '') return;
    const newPaperData = { name, backgroundColor: selectedImages };
    if (selectedBtn === 'image') {
      newPaperData.backgroundColor = 'beige';
      newPaperData.backgroundImageURL = selectedImages;
    }

    const createdPaper = await onSubmitAsync(newPaperData);
    if (createdPaper) {
      navigate(`/post/${createdPaper.id}`);
    }
  };

  const handleDuplicateName = () => {
    if (papersInfo.includes(name)) {
      setErrorMessage('중복된 이름입니다');
    } else {
      setErrorMessage('');
    }
  };

  useEffect(() => {
    handleLoadImages();
    // handleLoadPapersInfo();
  }, []);

  useEffect(() => {
    handleDuplicateName();
  }, [name, papersInfo]);

  const backdrop = Portal.Backdrop(<Backdrop />);
  const modal = Portal.Modal(<ImagePickerModal closeModal={closeModal} />);

  return (
    <S.Wrapper>
      {backdrop}
      {modal}
      <S.Title>To. {name}</S.Title>
      <Input error={errorMessage} value={name} onChange={(e) => setName(e.target.value)}>
        받는 사람 이름을 입력해 주세요
      </Input>
      <S.BackgroundTitle>배경화면을 선택해 주세요.</S.BackgroundTitle>
      <S.Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</S.Description>
      <ToggleButton />
      <BackgroundOptions openModal={openModal} />

      <PrimaryCreateBtn onClick={handleCreatePaper} disabled={name === '' || errorMessage}>
        {isSubmitting ? <Loading /> : '생성하기'}
      </PrimaryCreateBtn>
    </S.Wrapper>
  );
}

export default FormSubmitter;
