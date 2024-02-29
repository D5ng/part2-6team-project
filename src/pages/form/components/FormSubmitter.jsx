/* eslint-disable max-len */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from 'pages/form/components/FormSubmitter.style';
import Input from '@Components/form/Input';
import PrimaryCreateBtn from '@Components/ui/PrimaryCreateBtn';
import ToggleButton from './ToggleButton';
import BackgroundOptions from './BackgroundOptions';
import { useFormContext } from '../context/FormContext';
import { createPaper } from '../api';
import useAsync from '../hooks/useAsync';

function FormSubmitter() {
  const navigate = useNavigate();
  const { selectedBtn, selectedBackground } = useFormContext();
  const [name, setName] = useState('');
  const [isSubmitting, submittingError, onSubmitAsync] = useAsync(createPaper);

  const handleCreatePaper = async (e) => {
    e.preventDefault();

    const newPaperData = { name, backgroundColor: selectedBackground };

    if (selectedBtn === 'image') {
      newPaperData.backgroundColor = 'beige';
      newPaperData.backgroundImageURL = selectedBackground;
    }
    const createdPaper = await onSubmitAsync(newPaperData);
    console.log('Created Paper:', createdPaper);

    if (createdPaper) {
      navigate(`/post/${createdPaper.id}`);
    }
  };
  console.log(name);
  return (
    <S.Wrapper>
      <S.Title>To.</S.Title>
      <Input error={submittingError} value={name} onChange={(e) => setName(e.target.value)}>
        받는 사람 이름을 입력해 주세요
      </Input>
      <S.BackgroundTitle>배경화면을 선택해 주세요.</S.BackgroundTitle>
      <S.Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</S.Description>
      <ToggleButton />
      <BackgroundOptions />

      <PrimaryCreateBtn onClick={handleCreatePaper} disabled={name === '' || isSubmitting}>
        {isSubmitting ? 'Loading ...' : '생성하기'}
      </PrimaryCreateBtn>
    </S.Wrapper>
  );
}

export default FormSubmitter;
