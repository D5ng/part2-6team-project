import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import * as S from '@Form/components/FormSubmitter.style';
import { useFormContext } from '@Form/context/FormContext';
import { createPaper } from '@Form/api';
import useAsync from 'hooks/useAsync';
import Input from '@Components/form/Input';
import PrimaryCreateBtn from '@Components/ui/PrimaryCreateBtn';
import Loading from '@Components/ui/Loading';
import ToggleButton from '@Form/components/ToggleButton';
import BackgroundOptions from '@Form/components/BackgroundOptions';

// Moadl
import ImagePickerModal from './ImagePickerModal';

function FormSubmitter() {
  const navigate = useNavigate();
  const { handleLoadImages, selectedBtn, selectedBackground } = useFormContext();
  const [name, setName] = useState('');
  const [active, setActive] = useState(false);
  const [isSubmitting, submittingError, onSubmitAsync] = useAsync(createPaper);

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  const handleCreatePaper = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newPaperData = { name, backgroundColor: selectedBackground };
    if (selectedBtn === 'image') {
      newPaperData.backgroundColor = 'beige';
      newPaperData.backgroundImageURL = selectedBackground;
    }
    const createdPaper = await onSubmitAsync(newPaperData);
    if (createdPaper) {
      navigate(`/post/${createdPaper.id}`);
    }
  };

  useEffect(() => {
    handleLoadImages();
  }, []);

  const modal = createPortal(<ImagePickerModal closeModal={closeModal} />, document.getElementById('modal-root'));

  return (
    <S.Wrapper>
      <S.Title>To.</S.Title>
      <Input error={submittingError} value={name} onChange={(e) => setName(e.target.value)}>
        받는 사람 이름을 입력해 주세요
      </Input>
      <S.BackgroundTitle>배경화면을 선택해 주세요.</S.BackgroundTitle>
      <S.Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</S.Description>
      <ToggleButton />
      <BackgroundOptions openModal={openModal} />

      <PrimaryCreateBtn onClick={handleCreatePaper} disabled={name === ''}>
        {isSubmitting ? <Loading /> : '생성하기'}
      </PrimaryCreateBtn>
      {active && modal}
    </S.Wrapper>
  );
}

export default FormSubmitter;
