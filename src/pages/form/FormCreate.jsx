/* eslint-disable max-len */
import React from 'react';
import * as S from 'pages/form/FormCreate.style';
import Input from '@Components/form/Input';
import PrimaryCreateBtn from '@Components/ui/PrimaryCreateBtn';
import ToggleButton from './components/ToggleButton';
import BackgroundOptions from './components/BackgroundOptions';
import { FormProvider } from './context/FormContext';

function FormCreate() {
  return (
    <FormProvider>
      <S.FormCreate>
        <S.Wrapper>
          <S.Title>To.</S.Title>
          <Input errorMessage="이름을 입력해 주세요">받는 사람 이름을 입력해 주세요</Input>

          <S.BackgroundTitle>배경화면을 선택해 주세요.</S.BackgroundTitle>
          <S.Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</S.Description>

          <ToggleButton />
          <BackgroundOptions />
          <PrimaryCreateBtn>생성하기</PrimaryCreateBtn>
        </S.Wrapper>
      </S.FormCreate>
    </FormProvider>
  );
}

export default FormCreate;
