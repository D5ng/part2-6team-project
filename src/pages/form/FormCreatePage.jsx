import React from 'react';
import { FormProvider } from '@Form/context/FormContext';
import FormSubmitter from '@Form/components/FormSubmitter';
import { UnsplashModalContextProvider } from '@Components/unsplashModal/UnsplashModalContext';

import styled from 'styled-components';

const S = {
  Section: styled.section`
    display: flex;
    justify-content: center;
  `,
};

function FormCreate() {
  return (
    <FormProvider>
      <UnsplashModalContextProvider>
        <S.Section>
          <FormSubmitter />
        </S.Section>
      </UnsplashModalContextProvider>
    </FormProvider>
  );
}

export default FormCreate;
