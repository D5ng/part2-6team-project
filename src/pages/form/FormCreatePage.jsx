import React from 'react';
import * as S from 'pages/form/FormCreatePage.style';
import { FormProvider } from '@Form/context/FormContext';
import FormSubmitter from '@Form/components/FormSubmitter';
import { ImagePickerModalProvider } from '@Components/unsplashModal/ImagePickerModalContext';

function FormCreate() {
  return (
    <FormProvider>
      <ImagePickerModalProvider>
        <S.FormCreate>
          <FormSubmitter />
        </S.FormCreate>
      </ImagePickerModalProvider>
    </FormProvider>
  );
}

export default FormCreate;
