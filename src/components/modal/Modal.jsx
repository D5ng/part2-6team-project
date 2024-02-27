import React from 'react';
import * as S from '@Components/modal/Modal.style';

function Modal() {
  return (
    <S.Container>
      <S.Info>
        <S.Profile>
          <S.ProfileImg src="/images/icons/logo.svg" />
          <S.ProfileText>From.</S.ProfileText>
          <S.ProfileName>김동훈</S.ProfileName>
        </S.Profile>
        <S.CreatAt>2023.07.08</S.CreatAt>
      </S.Info>
      <S.Contents>
        <S.Line />
        <S.TextBox>
          오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
          오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마오류나지마
        </S.TextBox>
        <S.Button>확인</S.Button>
      </S.Contents>
    </S.Container>
  );
}
export default Modal;
