import React from 'react';
import * as S from 'pages/form/FormCreatePage.style';
import { FormProvider } from './context/FormContext';
import FormSubmitter from './components/FormSubmitter';

function FormCreate() {
  return (
    <FormProvider>
      <S.FormCreate>
        <FormSubmitter />
      </S.FormCreate>
    </FormProvider>
  );
}

export default FormCreate;
