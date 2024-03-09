import React from 'react';
import { FormProvider } from '@Form/context/FormContext';
import FormSubmitter from '@Form/components/FormSubmitter';
import { UnsplashModalContextProvider } from '@Components/unsplashModal/UnsplashModalContext';

import styled from 'styled-components';
import MetaTag from '@Pages/SEOMetaTag';

const S = {
  Section: styled.section`
    display: flex;
    justify-content: center;
  `,
};

function FormCreate() {
  return (
    <FormProvider>
      <MetaTag title="롤링 페이퍼 - 생성" description="롤링 페이퍼를 만들어 다양한 메시지를 받아보세요." />

      <UnsplashModalContextProvider>
        <S.Section>
          <FormSubmitter />
        </S.Section>
      </UnsplashModalContextProvider>
    </FormProvider>
  );
}

export default FormCreate;
