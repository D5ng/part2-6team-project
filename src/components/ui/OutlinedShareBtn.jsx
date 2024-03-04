import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';

function OutlinedShareBtn({ kakaoApi, cloneURL }) {
  const [hidden, setHidden] = useState(true);
  return (
    <S.ShareBox>
      <S.ShareBtn ttype="button" onClick={() => setHidden(!hidden)}>
        <S.ButtonIconImg src="/images/icons/shareIcon.svg" alt="공유버튼 아이콘" />
      </S.ShareBtn>
      <S.Wrap hidden={hidden}>
        <S.ShareOption type="button" onClick={kakaoApi}>
          카카오톡 공유
        </S.ShareOption>
        <S.ShareOption type="button" onClick={cloneURL}>
          URL 공유
        </S.ShareOption>
      </S.Wrap>
    </S.ShareBox>
  );
}

export default OutlinedShareBtn;
